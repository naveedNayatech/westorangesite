import { useState } from 'react';
import './FormSection.css';
import { DatePicker, Divider, Radio } from 'antd';
import NPRF_English from '../../../src/assets/Forms/NPRF_English.pdf'
import NPRF_Spanish from '../../../src/assets/Forms/NPRF_Spanish.pdf'
import NPRF_Portuguese from '../../../src/assets/Forms/NPRF_Portuguese.pdf'
import { Modal, Form, Input, Row, Col, Checkbox } from 'antd';
import Logo from '../../../src/assets/final_Logo.png';

const FormSection = () => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
    const showModal = () => {
      setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
    <div className="form-section">
        <div className="text-center">   
            Get Registered <br/>
            <span className="mainHeading"> Get Registered with us</span>
        </div>

        <div className="forms-grid">
            <div className="downloadBtns">

                <a href={NPRF_English} 
                    className='downloadFormBtn' 
                    download="New_Patient_Registeration_Form.pdf"> 
                <i className="bx bx-download"></i> &nbsp; Download Form in English </a>

                <a href={NPRF_Spanish} 
                    className='downloadFormBtn' 
                    download="New_Patient_Registeration_Form_Spanish.pdf"> 
                <i className="bx bx-download"></i> &nbsp; Download Form in Spanish </a>

                <a href={NPRF_Portuguese} 
                    className='downloadFormBtn' 
                    download="New_Patient_Registeration_Form_Portuguese.pdf"> 
                <i className="bx bx-download"></i> &nbsp; Download Form in Portuguese </a>
            </div>

            {/* <Divider type="horizontal" style={{borderColor: 'red', height: '4rem'}}/> */}
            <Divider orientation="left" style={{borderColor: '#2356A7', height: '4rem'}}>Fill & Submit Here</Divider>

            <div className="submitForm"> 
            <button className='FillFormBtn' onClick={showModal}>
                <i className="bx bx-edit"></i> &nbsp; Fill and Submit Here
            </button>
            &nbsp;&nbsp;&nbsp;
            </div>
        </div>

        {/* Modal form to submit */}
        <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="registratinForm">
            <img src={Logo} alt="Logo" width={320} height={100} />

            <p className="formHeading">Patient Demographics</p>

            {/* Form starts here */}
            <Form
                name="basic"
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >   
            <Row>
                <Col span={11}>
                    <Form.Item
                        label="Firstname"
                        name="fname"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your firstname!',
                            },
                        ]}
                        >
                    <Input />
                    </Form.Item>
                </Col>
                &nbsp;&nbsp;    
                <Col span={11}>    
                    <Form.Item
                        label="Lastname"
                        name="lname"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your lastname!',
                            },
                        ]}
                        >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                <Form.Item
                    label="Social Security #"
                    name="socialsec"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your social security #',
                        },
                    ]}
                    >
                <Input />
                </Form.Item>
                </Col>

                <Col span={12}>
                <Form.Item
                    label="Date of Birth"
                    name="DOB"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your DOB!',
                        },
                    ]}
                    >
                    <DatePicker />
                </Form.Item>
                </Col>
            </Row>
            
            {/* Address */}
            <Row>
                <Col span={24}>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your address',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            {/* City State and Zip */}
            <Row>
                <Col span={8}>
                <Form.Item
                    label="City"
                    name="city"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your city',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>

                <Col span={8}>
                <Form.Item
                    label="State"
                    name="state"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your state',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>

                <Col span={8}>
                <Form.Item
                    label="Zip"
                    name="zip"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your zip',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                <Form.Item
                    label="Home Phone #"
                    name="homePhone"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your Home Phone #',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>

                <Col span={12}> 
                <Form.Item
                    label="Cell Phone #"
                    name="cellPhone"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your Cell Phone #',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your Email',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

             <Row>
                <Col span={12}>
                <Form.Item
                    label="Sex"
                    name="sex"
                    >
                    <Radio.Group>
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                    </Radio.Group>
                </Form.Item>
                </Col>

                <Col span={12}>
                <Form.Item
                    label="Race"
                    name="race"
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>        

            <Row>
                <Col span={16}>
                <Form.Item
                    label="Marital Status"
                    name="marital"
                >    
                <Radio.Group>
                        <Radio value="Single">Single</Radio>
                        <Radio value="Married">Married</Radio>
                        <Radio value="Divorced">Divorced</Radio>
                        <Radio value="Widow">Widow(er)</Radio>
                </Radio.Group>
                </Form.Item>
                </Col>
            </Row>

            <p className="formHeading">Insurance information</p>
            <Row>
                <Col span={10}>
                <Form.Item
                    label="Primary Insurance"
                    name="pInsurance"
                    
                    >
                    <Input placeholder="Primary Insurance"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>

                <Col span={10}>
                <Form.Item
                    label="Effective Date"
                    name="effectiveDate"
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Name on Card"
                    name="nameOnCard"
                    >
                    <Input placeholder="Name on Card"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>
                
                <Col span={10}>
                <Form.Item
                    label="Policy #"
                    name="policynumber"
                    >
                    <Input placeholder="Policy Number"/>
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Secondary Insurance"
                    name="sInsurance"
                    >
                    <Input placeholder="Secondary Insurance"/>
                </Form.Item>
                </Col>
                
                <Col span={2}></Col>
                
                <Col span={10}>
                <Form.Item
                    label="Effective Date"
                    name="effectiveDate"
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Name on Card"
                    name="nameOnCard2"
                    >
                    <Input placeholder="Name on Card"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>

                <Col span={10}>
                <Form.Item
                    label="Policy Number"
                    name="pnumber2"
                    >
                    <Input placeholder="Policy Number"/>
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Primary Care Physician"
                    name="pCarePhy"
                    >
                    <Input placeholder="Primary Care Physician"/>
                </Form.Item>
                </Col>
                
                <Col span={2}></Col>

                <Col span={10}>
                <Form.Item
                    label="PCP Phone #"
                    name="pcpPhoneNumber"
                    >
                    <Input placeholder="PCP Phone Number"/>
                </Form.Item>
                </Col>
            </Row>


            <Row>
                <Col span={10}>
                <Form.Item
                    label="Referring Physician"
                    name="rPhysician"
                    >
                    <Input placeholder="Referring Physician"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>
                
                <Col span={10}>
                <Form.Item
                    label="Referring Provider #"
                    name="rProviderNumber"
                    >
                    <Input placeholder="Referring Provider #"/>
                </Form.Item>
                </Col>
            </Row>
            
            <p className="formHeading">Employer Information</p>
            <Row>
                <Col span={10}>
                <Form.Item
                    label="Employer"
                    name="employer"
                    >
                    <Input placeholder="Employer"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>
                
                <Col span={10}>
                <Form.Item
                    label="Work #"
                    name="workNumber"
                    >
                    <Input placeholder="Work #"/>
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={22}>
                <Form.Item
                    label="Business Address"
                    name="businessAddress"
                    >
                    <Input placeholder="Business Address"/>
                </Form.Item>
                </Col>
            </Row>       

            <Row>
                <Col span={7}>
                <Form.Item
                    label="City"
                    name="employerCity"
                    >
                    <Input placeholder="City"/>
                </Form.Item>
                </Col>

                <Col span={1}></Col>
                
                <Col span={7}>
                <Form.Item
                    label="State"
                    name="employerState"
                    >
                    <Input placeholder="State"/>
                </Form.Item>
                </Col>

                <Col span={1}></Col>
                
                <Col span={7}>
                <Form.Item
                    label="Zip"
                    name="employerZip"
                    >
                    <Input placeholder="Zip"/>
                </Form.Item>
                </Col>
            </Row>
            
            <Row>
                <Col span={22}>
                <Form.Item
                    label="In case of an emergency, whom should we contact?"
                    name="employerEmergencyContact"
                    >
                    <Input placeholder="Emergency contact"/>
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Relationship to patient"
                    name="relationshipToPatient"
                    >
                    <Input placeholder="Relationship to patient"/>
                </Form.Item>
                </Col>
                
                <Col span={1}></Col>

                <Col span={12}>
                <Form.Item
                    label="Emergency Contact Phone #"
                    name="emergencyContactPhoneNumber"
                    >
                    <Input placeholder="Emergency Contact Phone Number"/>
                </Form.Item>
                </Col>
            </Row>

            <p><b><u>Authorization for Treatment</u></b></p>
            <p style={{textAlign: 'justify'}}><b>
            I authorize West Orange Nephrology, LLC to perform procedures and treatment including administration of medicine 
            along with other surgical and medical procedures the may be necessary. I authorize the release of any medical 
            information necessary to process a claim and hereby assign benefits payable to West Orange Nephrology, LLC in the 
            event of another health insurance becoming primary over my health insurance. To further provide continuity of care, 
            I authorize the release of medical information to other specialty physicians. Furthermore, any services not covered 
            by my insurance will become my responsibility to full payment services rendered by West Orange Nephrology, LLC. 
            </b></p>
           
           <hr />
           <p><b>Dear patient,</b></p>
           <p><b>Please fill out the information below. The office of West Orange Nephrology will not call and leave 
            a message unless you have authorized to do so. This includes reminders of appointments, lab results, chart 
            information and ext. In the form below, state where, when, and who you are comfortable sharing 
            information with. Also, if there is anyone specific in relation with you and you are not comfortable sharing 
            your medical information, please let us know. </b></p>

            <p><b>I authorize the office of West Orange Nephrology to call me at the following phone numbers: </b></p>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Home"
                    name="home"
                    rules={[
                        {
                        required: true,
                        message: 'This is required',
                        },
                    ]}
                    >
                    <Input placeholder="Home"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>
                
                <Col span={10}>
                <Form.Item
                    label="Work #"
                    name="workNumber"
                    rules={[
                        {
                        required: true,
                        message: 'This is required',
                        },
                    ]}
                    >
                    <Input placeholder="Work #"/>
                </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <Form.Item
                    label="Cell"
                    name="cell"
                    rules={[
                        {
                        required: true,
                        message: 'This is required',
                        },
                    ]}
                    >
                    <Input placeholder="Cell"/>
                </Form.Item>
                </Col>

                <Col span={2}></Col>
                
                <Col span={10}>
                <Form.Item
                    label="Other"
                    name="other"
                    >
                    <Input placeholder="Other "/>
                </Form.Item>
                </Col>
            </Row>

            <p>The best day to call me is (circle as many as apply) <b>Mon, Tues, Wed, Thurs, Fri </b></p>
            <Row>
            <Col span={16}>
                <Form.Item
                label="The Best time to call me is"
                name="bestTimeToCall"
                rules={[
                    {
                    required: true,
                    message: 'This is required',
                    },
                ]}
                >
                <Input placeholder="The Best Time To Call "/>
                </Form.Item>
            </Col>
            </Row>        
            <p style={{textAlign: 'justify'}}><b>I authorize you to share my medical information with the following people (we will not give out 
            any information to anyone of your acquaintance, family, or relation without your personal 
            consent) 
            </b></p>       

            <p className="formHeading">advanced directive</p>
            <Row>
                <Col span={24}>
                <Form.Item
                    label="Have you designated an advanced directive who would make decisions about 
                    your medical care? "
                    name="designated"
                    rules={[
                        {
                        required: true,
                        message: 'This is required',
                        },
                    ]}
                    >
                    <Radio.Group>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                    </Radio.Group>
                </Form.Item>
                </Col>
                </Row>

                <Row>
                    <Col span={22}>
                    <Form.Item
                        label="Decision makers name :"
                        name="decisionmakersname"
                        rules={[
                            {
                            required: true,
                            message: 'This is required',
                            },
                        ]}
                        >
                        <Input placeholder="Decision makers name "/>
                    </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={10}>
                    <Form.Item
                        label="Decision makers phone :"
                        name="decisionmakersphone"
                        rules={[
                            {
                            required: true,
                            message: 'This is required',
                            },
                        ]}
                        >
                        <Input placeholder="Decision makers Phone "/>
                    </Form.Item>
                    </Col>

                    <Col span={2}>

                    </Col>

                    <Col span={10}>
                    <Form.Item
                        label="Email Address :"
                        name="decisionmakersemail"
                        rules={[
                            {
                            required: true,
                            message: 'This is required',
                            },
                        ]}
                        >
                        <Input placeholder="Decision makers Email "/>
                    </Form.Item>
                    </Col>
                </Row>



                <Row>
                    <Col span={10}>
                    <Form.Item
                        label="Patient Name :"
                        name="patientName"
                        rules={[
                            {
                            required: true,
                            message: 'This is required',
                            },
                        ]}
                        >
                        <Input placeholder="Patient Name "/>
                    </Form.Item>
                    </Col>

                    <Col span={2}>

                    </Col>

                    <Col span={10}>
                    <Form.Item
                        label="Date :"
                        name="date"
                        rules={[
                            {
                            required: true,
                            message: 'This is required',
                            },
                        ]}
                        >
                        <Input placeholder="Date "/>
                    </Form.Item>
                    </Col>
                </Row>

                <hr />
                <p><b><u>Consent for Purposes of Treatment, Payment, and Healthcare Operations</u></b></p>

                <b> <Form.Item
                        label = "I, "
                        name="signer"
                        rules={[
                            {
                            required: true,
                            message: 'This is required',
                            },
                        ]}
                        >
                        <Input placeholder='Your Name'/>
                    </Form.Item> &nbsp;&nbsp; consent to the use or disclosure of my protected health,
                    information by West Orange Nephrology for the purpose of diagnosing or providing treatment to me, 
                    obtaining payment for my healthcare bills or to conduct healthcare operations of WEST ORANGE 
                    NEPHROLOGY, LLC. I understand that diagnoses or treatment of me by West Orange Nephrologists may be 
                    conditioned upon my consent as evidence by my signature on this document. <br /><br />

I understand that I have the right to request a restriction as to how my protected health 
information is used or disclosed to carry out treatment, payment or healthcare operations of his practice. 
WEST ORANGE NEPHROLOGY, LLC is not required to agree on the restrictions that I may request, the 
restriction is binding on WEST ORANGE NEPHROLOGY, LLC. <br /> <br />
I have the right to revoke this consent in writing, at any time, except to the extent that WEST 
ORANGE NEPHROLOGY, LLC has taken action in reliance on this consent.<br /><br /> 
My “protected health information” means health information, including my demographic 
information, collected from me and created or received by my physician, another health care provider, a 
health plan, my employer, or a health care clearinghouse. This protected health information relates to my 
past, present or future physical or mental health or condition and identifies me, or there is a reasonable 
basis to believe the information may identify me. <br /><br />
I understand that I have the right to review WEST ORANGE NEPHROLOGY LLC’s Notice of Privacy 
Practices prior to signing this document. The WEST ORANGE NEPHROLOGY LLC’s Notice of Privacy 
Practices has been provided to me. The Notice of Privacy Practices describes the types of uses and 
disclosures of my protected health information that will occur in my treatment, payment of bills or in the 
performance of health care operations of WEST ORANGE NEPHROLOGY LLC. The Notice of Privacy 
Practices for WEST ORANGE NEPHROLOGY LLC is also provided 301 S. West Crown Point Road, Suite 120, 
Winter Garden, FL 34787. The Notice of Privacy Practices also describes my rights and the WEST ORANGE 
NEPHROLOGY LLC’s duties with respect to my protected health information. <br /><br /> 
I understand that I need to call WEST ORANGE NEPHROLOGY LLC'S office 24 hours in advance to 
reschedule. We would like to accommodate other patients on our waiting list. WEST ORANGE NEPHRLOGY 
LLC’s reserves the right to charge $50.00 for no show appointments and same day cancellations. 
WEST ORANGE NEPHROLOGY LLC reserves the right to change the privacy practices that are 
described in the Notice of Privacy Practices. I may obtain a revised notice of privacy practices by calling the 
office and requesting a revised copy to be sent in the mail or asking for one at the time of my next 
appointment. 
                    
            </b>
            </Form>
        </div>
      </Modal>

    </div>
  )
}

export default FormSection