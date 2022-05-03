import React from 'react';
import LeashContainer from '../components/leashContainer';
import LeashCard from '../components/leashCard';

const GalleryPage: React.FC = () => (
  <LeashContainer>
    <LeashCard title="Pavadėlis Baltas S" description="Baltos spalvos pavadėlis skirtas mažos veislės šunims" price={15.50} img="https://images.unsplash.com/photo-1517598499378-be07cbf2e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  </LeashContainer>
);

export default GalleryPage;
