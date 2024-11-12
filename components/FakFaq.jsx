import React from 'react'
import { Button } from './ui/button';
import { CreateFakeData } from '@/actions/createFakeFaq';

function FakFaq() {
 const handleCreateFakeData = async () => {
    const data = await CreateFakeData();
    console.log('Fake data created:', data);
  };

  return (
    <div>
      <h1>Fake Data Generator</h1>
      <Button onClick={handleCreateFakeData}>Generate Fake Questions and Answers</Button>
    </div>
  );
}

export default FakFaq

 
