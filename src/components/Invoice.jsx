import React from 'react'

function Invoice() {

    return (
        <>
            <div className="max-w-3xl mx-auto m-4 p-8 lg:p-16">
                {/* Invoice */}
                <div className='flex justify-between'>
                    <div className='mt-4'>
                        <h4 className='font-bold mb-1'>Roltz Eyewear Limited</h4>
                        <div className='text-xs' >
                            <p>Bisazza Street</p>
                            <p>Silema SLM 1651</p>
                            <p>Malta</p>
                            <p>VAT: MT25905210</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl'>INVOICE</h1>
                    </div>
                </div>
                <div className='flex justify-between mt-16'>
                    <div className='space-y-2'>
                        <p className='font-bold'>Bill To:</p>
                        <p>Client Name - Client ID</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold'>Invoice#</p>
                        <p><span className='font-bold mr-4'> Invoice Date </span> 26/05/2023</p>
                        <p><span className='font-bold mr-4'>Due Date</span> 26/05/2023</p>
                    </div>
                </div>

                <div className='mt-12'>
                    <table className='table-auto w-full'>
                        <thead className='leading-10 text-xs' style={{ backgroundColor: 'grey', color: 'white' }}>
                            <th className='text-left pl-3'>Item Description</th>
                            <th className='text-right'>Qty</th>
                            <th className='text-right'>Rate</th>
                            <th className='text-right pr-3'>Amount</th>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b-2 leading-10 text-sm'>
                                <td className='pl-3'>Payment #1</td>
                                <td className='text-right'>1</td>
                                <td className='text-right'>0</td>
                                <td className='text-right pr-3'>0.00</td>
                            </tr>
                            <tr className='border-b-2 leading-10 text-sm'>
                                <td className='pl-3'>Payment #2</td>
                                <td className='text-right'>1</td>
                                <td className='text-right'>0</td>
                                <td className='text-right pr-3'>0.00</td>
                            </tr>
                            <tr className='border-b-2 leading-10 text-sm'>
                                <td className='pl-3'>Payment #3</td>
                                <td className='text-right'>1</td>
                                <td className='text-right'>0</td>
                                <td className='text-right pr-3'>0.00</td>
                            </tr>
                            <tr className='border-b-2 leading-10 text-sm'>
                                <td className='pl-3'>Payment #4</td>
                                <td className='text-right'>1</td>
                                <td className='text-right'>0</td>
                                <td className='text-right pr-3'>0.00</td>
                            </tr>
                            <tr className='border-b-2 leading-10 text-sm'>
                                <td className='pl-3'>Payment #5</td>
                                <td className='text-right'>1</td>
                                <td className='text-right'>0</td>
                                <td className='text-right pr-3'>0.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex justify-end mt-4 pr-3'>
                        <p className='mr-20 lg:mr-32'>Sub Total</p>
                        <p className='font-bold'>0.00</p>
                    </div>
                    <div className='flex justify-end mt-16 pr-3'>
                        <p className='mr-20 lg:mr-32'> Total</p>
                        <p className='font-bold'>&euro;0.00</p>
                    </div>
                </div>

                <div className='space-y-24 mt-8'>
                    <div>
                        <p className='font-bold text-sm text-gray-500'>Notes</p>
                        <p>It was great doing business with you.</p>
                    </div>
                    <div>
                        <p className='font-bold text-sm  text-gray-500'>Terms & Conditions</p>
                        <p>Please ensure to make the payments on time to avoid late payment fees.</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Invoice