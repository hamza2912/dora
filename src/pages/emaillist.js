import React from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

function Emaillist() {

    const [emailList, setemailList] = React.useState([]);
    const [betaList, setbetaList] = React.useState([]);
    const [showemails, setshowemails] = React.useState(true);
    const db = getDatabase();

    React.useEffect(() => {
        const emails = ref(db, `emailList/`);
        onValue(emails, (snapshot) => {
            if(snapshot.val()){
                setemailList(snapshot.val());
            }
        });
        const betalists = ref(db, `betaList/`);
        onValue(betalists, (snapshot) => {
            if(snapshot.val()){
                setbetaList(snapshot.val());
            }
        });
    },[]);

    return (
      
      <div className='w-full h-auto overflow-x-hidden lg:p-10 p-8'>

        <div className='lg:w-4/5 w-full mx-auto'>
        <p className='uppercase md:text-4xl text-2xl font-semibold tracking-widest text-center mb-8'>Dora</p>
        <div className='grid grid-cols-2 cursor-pointer'>
            <div onClick={()=>setshowemails(true)} className={showemails ? 'bg-mate w-full text-center text-white rounded-md py-5' : 'w-full text-center rounded-md py-5'}>
                <h1 className='lg:text-lg text-sm'>Email List</h1>
            </div>
            <div onClick={()=>setshowemails(false)} className={!showemails ? 'bg-mate w-full text-center text-white rounded-md py-5' : 'w-full text-center rounded-md py-5'}>
                <h1 className='lg:text-lg text-sm'>Beta Program List</h1>
            </div>
        </div>
        { showemails ?
        <table class="ui celled table">
            <thead>
                <tr>
                <th>S.No</th>
                <th>Emails</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    emailList.length > 0 ?
                    emailList.map((user, index) => {
                        return (
                            <tr>
                                <td>{index +1}</td>
                                <td>{user}</td>
                            </tr> 
                        )
                    }) :
                    <p>No emails yet!</p>       
                }

            </tbody>
        </table>
        : <table class="ui celled table">
            <thead>
                <tr>
                <th>S.No</th>
                <th>Emails</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Profession</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    betaList.length > 0 ?
                    betaList.map((user, index) => {
                        return (
                            <tr>
                                <td>{index +1}</td>
                                <td>{user.email}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.profession}</td>
                            </tr> 
                        )
                    }) :
                    <p>No emails yet!</p>       
                }

            </tbody>
        </table>
        }

        </div>

      </div>

    );
  }
  
export default Emaillist;
