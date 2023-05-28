import React from 'react'

function InvoiceSecond() {

    return (
        <>
            <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', padding: '4rem', }} >
                {/* Invoice */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr style={{}}>
                                <td style={{ fontWeight: '700', marginBottom: '0.25rem' }}>Roltz Eyewear Limited</td>
                                <td style={{ textAlign: 'right', lineHeight: '2.5rem', fontSize: '2.25rem' }}>INVOICE</td>
                            </tr>
                            <tr><td style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>Bisazza Street</td></tr>
                            <tr><td style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>Silema SLM 1651</td></tr>
                            <tr> <td style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>Malta</td></tr>
                            <tr><td style={{ fontSize: '0.75rem', lineHeight: '1rem' }}>VAT: MT25905210</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table style={{ marginTop: '4rem', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: '700', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Bill To:</td>
                                <td style={{ textAlign: 'right', width: '1/3', fontWeight: '700', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Invoice#</td>
                            </tr>
                            <tr>
                                <td style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Client Name - Client ID</td>
                                <td style={{ textAlign: 'right', width: '1/3', fontWeight: '700', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Invoice Date </td>
                                <td style={{ textAlign: 'right', marginTop: '0.5rem', marginBottom: '0.5rem' }}>26/05/2023</td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td style={{ textAlign: 'right', fontWeight: '700' }}>Due Date</td>
                                <td style={{ textAlign: 'right' }}>26/05/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '3rem' }}>
                    <table style={{ tableLayout: 'auto', width: '100%' }} >
                        <thead style={{ lineHeight: '2.5rem', fontSize: '0.75rem', lineHeight: '1rem', backgroundColor: 'grey', color: 'white' }}>
                            <th style={{ textAlign: 'left', paddingLeft: '0.75rem' }}>Item Description</th>
                            <th style={{ textAlign: 'right' }} >Qty</th>
                            <th style={{ textAlign: 'right' }} >Rate</th>
                            <th style={{ textAlign: 'right', paddingRight: '0.75rem' }} >Amount</th>
                        </thead>
                        <tbody >
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '2rem', fontSize: '0.875rem' }} >
                                <td style={{ paddingLeft: '0.75rem' }}>Payment #1</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '0.75rem' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '2rem', fontSize: '0.875rem' }}>
                                <td style={{ paddingLeft: '0.75rem' }}>Payment #2</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '0.75rem' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '2rem', fontSize: '0.875rem' }}>
                                <td style={{ paddingLeft: '0.75rem' }}>Payment #3</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '0.75rem' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '2rem', fontSize: '0.875rem' }}>
                                <td style={{ paddingLeft: '0.75rem' }}>Payment #4</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '0.75rem' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '2rem', fontSize: '0.875rem' }} >
                                <td style={{ paddingLeft: '0.75rem' }} >Payment #5</td>
                                <td style={{ textAlign: 'right' }} >1</td>
                                <td style={{ textAlign: 'right' }} >0</td>
                                <td style={{ textAlign: 'right', paddingRight: '0.75rem' }}>0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table style={{ marginTop: '1rem', width: '100%' }}>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ textAlign: 'right' }}>Sub Total</td>
                            <td style={{ textAlign: 'right', fontWeight: '700', paddingRight: '0.75rem', width: '27%' }}>0.00</td>
                        </tr>
                    </table>
                    <table style={{ marginTop: '4rem', width: '100%' }}>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ textAlign: 'right' }}>Total</td>
                            <td style={{ textAlign: 'right', fontWeight: '700', paddingRight: '0.75rem', width: '27%' }}>&euro;0.00</td>
                        </tr>
                    </table>
                </div>
                <div style={{ marginTop: '0.5rem' }} >
                    <div>
                        <p style={{ fontWeight: '700', lineHeight: '1.25rem', fontSize: '0.875rem', color: 'rgb(107 114 128)' }} >Notes</p>
                        <p>It was great doing business with you.</p>
                    </div>
                    <div style={{ marginTop: '6rem', marginBottom: '2rem' }}>
                        <p style={{ fontWeight: '700', lineHeight: '1.25rem', fontSize: '0.875rem', color: 'rgb(107 114 128)' }}>Terms & Conditions</p>
                        <p>Please ensure to make the payments on time to avoid late payment fees.</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default InvoiceSecond