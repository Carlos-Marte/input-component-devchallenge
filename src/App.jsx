import { Input } from './components/Input/Input';

function App () {
  return (
    <div className='max-w-5xl mx-auto'>
      <main className='flex flex-col justify-center gap-4 p-4'>
        <Input />
        <Input errorState={true} />
        <Input disabled={true} />
        <Input helperText="Some interesting text" />
        <Input helperText="Some interesting text" errorState={true} />
        <Input startIcon="call" />
        <Input endIcon="lock" />
        <Input value="Text" />
        <Input size='sm' />
        <Input size='md' />
        <Input fullWidth={true}/>
        <Input multiline={true} row={5} />
      </main>

      <p className='text-gray3 p-4'>Created by <a href='https://devchallenges.io/portfolio/Carlos-Marte' target='_blank' className='underline hover:text-purple-600' rel="noreferrer">Carlos Marte</a> - devchallenges.io</p>
    </div>
  );
}

export default App;
