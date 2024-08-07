"use client"
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
// import mixpanel from 'mixpanel-browser';

const PaymentPolicies = () => {
  useEffect(() => {
    // mixpanel.track('paymentPolicyViewed');
  }, []);
  const { t } = useTranslation();
  return (
    <div className='wrapper1'>

      <div className="container-fluid SanatanHomeStyles ">
        <div className='container'>

          <div className="row">
            <div className="col-sm-12 mt-5 mb-5">
              <div class="card cardBg ">
                <div class="card-header tableHeadBirth">
                  <center>
                    <h2>{t('Payment Policy')}</h2>
                  </center>

                </div>
                <div class="card-body">
                  <h5>{t('This Payment Policy governs')}

                  </h5>
                  <h2>{t('Payment Terms')}</h2>
                  <ol>
                    <li><h3>{t('Payment Method')}:</h3><p>{t('Payment for Paid Services')}</p></li>
                    <li><h3>{t('Currency')}:</h3><p>{t('All prices and payments')}</p></li>
                    <li><h3>{t('Payment Authorization')}:</h3><p>{t('By providing payment')}</p></li>
                    <li><h3>{t('Pricing and Billing')}</h3>
                      <ol type="A">
                        <li><h3>{t('Pricing')}:</h3><p>{t('The prices for Paid Services')} </p></li>
                        {/* <li><h3>Billing Cycle:</h3><p>For subscription-based Paid Services, you will be billed on a recurring basis according to the billing cycle selected at the time of purchase (e.g., monthly, annually). Your subscription will automatically renew unless cancelled before the end of the current billing cycle.</p></li> */}
                        <li><h3>{t('Taxes')}:</h3><p>{t('Prices for Paid Services do not include')} </p></li>
                      </ol>
                    </li>
                    <li><h3>{t('Refunds and Cancellations')} </h3>
                      <ol type="A">
                        <li><h3>{t('Refund Policy')}:</h3><p>{t('Except as required by law')} </p></li>
                        <li><h3>{t('Cancellation')}:</h3><p>{t('Cancellation is not allowed')}</p></li>
                        <li><h3>{t('Payment Failure')}:</h3><p>{t('Your payment security')}</p></li>
                      </ol>
                      
                    </li>
                    {/* <li><h3>Subscription Management</h3>
                      <ol type="A">
                        <li><h3> Account Access: </h3><p>You may manage your subscription and payment settings by accessing your account on the Service. </p></li>
                        <li><h3>Changes to Subscription:</h3><p>Changes to your subscription plan, including upgrades, downgrades, or changes to billing cycle, may be made through your account settings. </p></li>

                      </ol>
                    </li> */}
                    <li><h3>{t('Payment Security')}</h3>
                      <ol type="A">
                        <li><h3>{t('Secure Transactions')}:</h3><p>{t('We use industry-standard encryption')}</p></li>
                        <li><h3>{t('Third-Party Payment Processors')}:</h3><p>{t('Payment transactions may be processed through third-party')}  </p></li>

                      </ol>
                    </li>
                    <li><h3>{t('Contact Us')}:</h3><p>{t('If you have any questions ')}   </p></li>

                  </ol>
                  <h5>{t('By purchasing Paid Services')}</h5>
                  <h5>{t('Version')}: 1.1 <br />

                    {t('Last updated')} <br />
                    {t('Effective from')}
                    </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentPolicies