export default function Page() {
  const typingEffectStyle = {
    animation: `typing 5s linear forwards, blink 0.75s step-end infinite`,
    borderRight: `3px solid var(--accent)`, // Use CSS variable for border color
    width: '0'
  };

  return (
    <main className='flex min-h-screen flex-col p-4 sm:p-6'>
      <div className='flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-4 sm:px-6 pb-24'> 
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-primary dark:text-primary-foreground">
          Welcome
        </h1>
        <div className="max-w-full mx-auto">
          <h3 className='inline-block overflow-hidden whitespace-nowrap text-sm sm:text-md md:text-lg text-secondary dark:text-secondary-foreground' style={typingEffectStyle}>
            Welcome to my page, my name is Santiago
          </h3>
        </div>
      </div>
    </main>
  );
}
