import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ 
    children, 
    className, 
    ...rest 
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={
        clsx(`
            flex
            w-[150px]
            h-[150px]
            items-end
            relative            
            rounded-lg 
            bg-blue-500 
            p-4
            origin-top-right
            hover:-rotate-1
            transition
            text-sm 
            font-medium 
            text-white 
            hover:bg-blue-400 
            hover:scale-95
            focus-visible:outline 
            focus-visible:outline-2 
            focus-visible:outline-offset-2
            focus-visible:scale-95
            focus-visible:outline-blue-500 
            active:bg-blue-600
            active:scale-95
            aria-disabled:cursor-not-allowed 
            aria-disabled:opacity-50`,
        className,
      ) }
    >{children}</button>
  );
}
