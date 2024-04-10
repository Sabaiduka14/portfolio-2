import { useState } from 'react';
import { saveContact } from '../config/firebase';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
      await saveContact({ email, name, message });
      setEmail('');
      setName('');
      setMessage('');
  };

  return (
    <main className="w-full h-[300px] mt-6 p-4 bg-gray-100 rounded-t-lg">
      <h1 className="text-center my-3 text-3xl font-bold">Contact Me</h1>
      <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Email</label>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex gap-2 md:gap-5">
          <div className="w-[200px]md:w-[600px]">
            <label htmlFor="name">Instagram</label>
            <Input id="name" placeholder="Instagram User" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="w-full">
            <label htmlFor="msg">Message</label>
            <Input id="msg" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>
        <Button className="w-full py-6">Submit</Button>
      </form>
    </main>
  );
}
