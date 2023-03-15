import { useEffect, useState } from "react";

export function UseTypeWriter({ text }) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        setCurrentText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 60);
  
      return () => clearTimeout(timerId);
    }, [currentIndex, text]);
  
    return <p>{currentText}</p>;
  }