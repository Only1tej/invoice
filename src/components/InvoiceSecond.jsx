import React from 'react'

function InvoiceSecond() {

    return (
        <>
            <div style={{ maxWidth: '768px', marginLeft: 'auto', marginRight: 'auto', padding: '64px', }} >
                {/* Invoice */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr style={{}}>
                                <td style={{ fontWeight: '700', marginBottom: '4px' }}>Roltz Eyewear Limited</td>
                                <td style={{ textAlign: 'right', lineHeight: '40px', fontSize: '36px' }}>INVOICE</td>
                            </tr>
                            <tr><td style={{ fontSize: '12px', lineHeight: '16px' }}>Bisazza Street</td></tr>
                            <tr><td style={{ fontSize: '12px', lineHeight: '16px' }}>Silema SLM 1651</td></tr>
                            <tr> <td style={{ fontSize: '12px', lineHeight: '16px' }}>Malta</td></tr>
                            <tr><td style={{ fontSize: '12px', lineHeight: '16px' }}>VAT: MT25905210</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table style={{ marginTop: '64px', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: '700', marginTop: '8px', marginBottom: '8px' }}>Bill To:</td>
                                <td style={{ textAlign: 'right', width: '1/3', fontWeight: '700', marginTop: '8px', marginBottom: '8px' }}>Invoice#</td>
                            </tr>
                            <tr>
                                <td style={{ marginTop: '8px', marginBottom: '8px' }}>Client Name - Client ID</td>
                                <td style={{ textAlign: 'right', width: '1/3', fontWeight: '700', marginTop: '8px', marginBottom: '8px' }}>Invoice Date </td>
                                <td style={{ textAlign: 'right', marginTop: '8px', marginBottom: '8px' }}>26/05/2023</td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td style={{ textAlign: 'right', fontWeight: '700' }}>Due Date</td>
                                <td style={{ textAlign: 'right' }}>26/05/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '48px' }}>
                    <table style={{ tableLayout: 'auto', width: '100%' }} >
                        <thead style={{ lineHeight: '40px', fontSize: '12px', lineHeight: '16px', backgroundColor: 'grey', color: 'white' }}>
                            <th style={{ textAlign: 'left', paddingLeft: '12px' }}>Item Description</th>
                            <th style={{ textAlign: 'right' }} >Qty</th>
                            <th style={{ textAlign: 'right' }} >Rate</th>
                            <th style={{ textAlign: 'right', paddingRight: '12px' }} >Amount</th>
                        </thead>
                        <tbody >
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '32px', fontSize: '14px' }} >
                                <td style={{ paddingLeft: '12px' }}>Payment #1</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '12px' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '32px', fontSize: '14px' }}>
                                <td style={{ paddingLeft: '12px' }}>Payment #2</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '12px' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '32px', fontSize: '14px' }}>
                                <td style={{ paddingLeft: '12px' }}>Payment #3</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '12px' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '32px', fontSize: '14px' }}>
                                <td style={{ paddingLeft: '12px' }}>Payment #4</td>
                                <td style={{ textAlign: 'right' }}>1</td>
                                <td style={{ textAlign: 'right' }}>0</td>
                                <td style={{ textAlign: 'right', paddingRight: '12px' }}>0.00</td>
                            </tr>
                            <tr style={{ borderBottomWidth: '2px', lineHeight: '32px', fontSize: '14px' }} >
                                <td style={{ paddingLeft: '14px' }} >Payment #5</td>
                                <td style={{ textAlign: 'right' }} >1</td>
                                <td style={{ textAlign: 'right' }} >0</td>
                                <td style={{ textAlign: 'right', paddingRight: '12px' }}>0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table style={{ marginTop: '16px', width: '100%' }}>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ textAlign: 'right' }}>Sub Total</td>
                            <td style={{ textAlign: 'right', fontWeight: '700', paddingRight: '12px', width: '27%' }}>0.00</td>
                        </tr>
                    </table>
                    <table style={{ marginTop: '64px', width: '100%' }}>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ textAlign: 'right' }}>Total</td>
                            <td style={{ textAlign: 'right', fontWeight: '700', paddingRight: '12px', width: '27%' }}>&euro;0.00</td>
                        </tr>
                    </table>
                </div>
                <div style={{ marginTop: '8px' }} >
                    <div>
                        <p style={{ fontWeight: '700', lineHeight: '20px', fontSize: '14px', color: 'rgb(107 114 128)' }} >Notes</p>
                        <p>It was great doing business with you.</p>
                    </div>
                    <div style={{ marginTop: '96px', marginBottom: '32px' }}>
                        <p style={{ fontWeight: '700', lineHeight: '20px', fontSize: '14px', color: 'rgb(107 114 128)' }}>Terms & Conditions</p>
                        <p>Please ensure to make the payments on time to avoid late payment fees.</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default InvoiceSecond