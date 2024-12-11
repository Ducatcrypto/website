interface DataType{
   id:number;
  
   title:string;
   desc:string;
}[];

const faq_data:DataType[]=[
   {
     "id": 1,
     "title": "What is DUCAT?",
     "desc": "DUCAT is a crypto ecosystem integrating blockchain technology with social gaming to empower players and developers."
   },
   {
     "id": 2,
     "title": "How does DUCAT benefit players?",
     "desc": "By providing secure transactions, in-game rewards, and a vibrant community."
   },
   {
     "id": 3,
     "title": "How can I acquire $DUCAT tokens?",
     "desc": "Through participating in our games, exchanges where $DUCAT is listed, or contributing to the community."
   },
   {
     "id": 4,
     "title": "What platforms support DUCAT?",
     "desc": "DUCAT is compatible with major social gaming platforms integrating our technology."
   }
 ];
 

export default faq_data;