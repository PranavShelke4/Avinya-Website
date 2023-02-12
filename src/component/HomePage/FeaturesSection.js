import React from 'react'
import './FeaturesSection.css'
import videoStore from '../../assets/videoStore.svg'
import cash from '../../assets/Cash.svg'
import live_classes from '../../assets/live_classes.svg'
import secure from '../../assets/secure.svg'
import Study from '../../assets/Study.svg'
import Test from '../../assets/Test Passed.svg'


function FeaturesSection() {
  return (
    <div className='FeatureSection'>
        <h1 className='feature-headline'>
            Avinya App Feature
        </h1>
        <div className='feature-arena'>
            <div className='feature-card'>
          <img src={videoStore} alt="Feature Img" height="50" />
          <h2>Online Video Store</h2>
          <div>Make videos for online courses and post them to the Video Store. Your entire contents are kept in a safe cloud. Your courses can be purchased by online or in-person students. Combine courses with practise exams to increase course sales.</div>
            </div>

            <div className='feature-card'>
          <img src={Study} alt="Feature Img" height="50" />
          <h2>Course Material</h2>
          <div>Create study materials for the course, such as course notes, PDFs, and Docs. Access the course materials because they are updated frequently.</div>
            </div>

            <div className='feature-card'>
          <img src={live_classes} alt="Feature Img" height="50" />
          <h2>Live Classes</h2>
          <div>An app enables coaching centers of all sizes to conduct interactive live classes online. Both students and tutors will find it to be an interesting learning experience.</div>
            </div>

            <div className='feature-card'>
          <img src={Test} alt="Feature Img" height="50" />
          <h2>Online Quiz</h2>
          <div>You may plan quizzes, review the results, and get thorough student analytics. In just a few seconds, upload countless questions for any entrance exam or competitive exam.</div>
            </div>

            <div className='feature-card'>
          <img src={cash} alt="Feature Img" height="50" />
          <h2>Payments Management</h2>
          <div>You can establish unique prices for each course you make based on the region from which your audience is located. The same currency will be used to collect payments.</div>
            </div>

            <div className='feature-card'>
          <img src={secure} alt="Feature Img" height="50" />
          <h2>100% secure mobile apps</h2>
          <div>You can watch the course material at your convenience if you download it offline. The files you download are entirely secure.Make your material free from piracy by prohibiting screen captures or content duplication.</div>
            </div>
        </div>
        
    </div>
  )
}

export default FeaturesSection