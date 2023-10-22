import React from 'react';
const AdmindashPage = () => {
    const user = localStorage.getItem('username') //changed
    const role=localStorage.getItem('userole');
    console.log(user);
    console.log(role);
    return (
        <>
                <section className='home'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1 className='text-center'>Admin Dashboard</h1>
                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className="card" style={{width:'18rem'}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Total Enquiry</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{20}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="card" style={{width:'18rem'}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Total Locked</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{20}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 '>
                                    <div className="card" style={{width:'18rem'}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Total Service started</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{10}</h6>
                                        </div>
                                    </div></div>
                                <div className='col-md-3'>
                                    <div className="card" style={{width:'18rem'}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Service Pending</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{10}</h6>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default AdmindashPage;