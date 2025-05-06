// HamburgerToggle.tsx
import { useState } from 'react';
import HamburgerIconCustom from '@/components/icons/HamburgerIconCustom';

export default function HamburgerToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const menu = document.getElementById('menu');
    if (!menu) return;

    if (!isOpen) {
      menu.classList.add('max-h-[500px]', 'opacity-100');
      menu.classList.remove('max-h-0', 'opacity-0');
    } else {
      menu.classList.remove('max-h-[500px]', 'opacity-100');
      menu.classList.add('max-h-0', 'opacity-0');
    }
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleToggle} className="cursor-pointer">
      <HamburgerIconCustom stroke={3} width={70} height={70} />
    </button>
  );
}
