import { useMemo, useRef, useState } from 'react'
import { Vector3, Euler, Quaternion, Matrix4, AnimationMixer } from 'three'
import Hero from './Hero'
import { useCompoundBody } from '@react-three/cannon'
import useKeyboard from '../Controle/useKeyboard'
import { useFrame } from '@react-three/fiber'
import { Vec3 } from 'cannon-es'
import useFollowCam from '../Controle/useFollowCam'
import { useAnimations } from '@react-three/drei'

export default function PlayerCollider(props) {
  const { pivot } = useFollowCam()
  const canJump = useRef(false)
  const group = useRef()
  const velocity = useMemo(() => new Vector3(), [])
  const inputVelocity = useMemo(() => new Vector3(), [])
  const euler = useMemo(() => new Euler(), [])
  const quat = useMemo(() => new Quaternion(), [])
  const targetQuaternion = useMemo(() => new Quaternion(), [])
  const worldPosition = useMemo(() => new Vector3(), [])
  const contactNormal = useMemo(() => new Vec3(0, 0, 0), [])
  const upAxis = useMemo(() => new Vec3(0, -1, 0), [])
  const [useAnim, setUseAnim] = useState(false)
  const mixer = useMemo(() => new AnimationMixer(), [])
  const actions = {}
  const keyboard = useKeyboard()

  const [ref, body] = useCompoundBody(
    () => ({
      mass: 1,
      shapes: [
        { args: [0.5], position: [0, 0.5, 0], type: 'Sphere' },
        { args: [0.5], position: [0, 1.5, 0], type: 'Sphere' }
      ],
      onCollide: (e) => {
        if (e.contact.bi.id === e.body.id) {
          e.contact.ni.negate(contactNormal)
        } else {
          contactNormal.set(...e.contact.ni)
        }
      },
      ...props
    }),
    useRef()
  )

  useFrame((_, delta) => {
    body.angularFactor.set(0, 0, 0)

    ref.current.getWorldPosition(worldPosition)
    const distance = worldPosition.distanceTo(group.current.position)

    const rotationMatrix = new Matrix4()
    rotationMatrix.lookAt(worldPosition, group.current.position, group.current.up)
    targetQuaternion.setFromRotationMatrix(rotationMatrix)
    if (!group.current.quaternion.equals(targetQuaternion)) {
      targetQuaternion.z = 0
      targetQuaternion.x = 0
      targetQuaternion.normalize()
      group.current.quaternion.rotateTowards(targetQuaternion, delta * 10)
    }
    if (document.pointerLockElement) {
      inputVelocity.set(0, 0, 0)
      if (keyboard['KeyW']) {
        setUseAnim("CharacterArmature|Run")
        inputVelocity.z = -10 * delta
      }else{
        setUseAnim(false)
      }
      if (keyboard['KeyS']) {
        setUseAnim("CharacterArmature|Run")
        inputVelocity.z = 10 * delta
      }
      if (keyboard['KeyA']) {
        setUseAnim("CharacterArmature|Run")
        inputVelocity.x = -10 * delta
      }
      if (keyboard['KeyD']) {
        setUseAnim("CharacterArmature|Run")
        inputVelocity.x = 10 * delta
      } 

      euler.y = pivot.rotation.y
      euler.order = 'XYZ'
      quat.setFromEuler(euler)
      inputVelocity.applyQuaternion(quat)
      velocity.set(inputVelocity.x, inputVelocity.y, inputVelocity.z)

      body.applyImpulse([velocity.x, velocity.y, velocity.z], [0, 0, 0])
    }
    group.current.position.lerp(worldPosition, 0.1)

    pivot.position.lerp(worldPosition, 0.2)
  })

  return (
    <>
      <group ref={group}>
        <Hero mixer={mixer} actions={actions} useAnim={useAnim}/>
      </group>
    </>
  )
}
