import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../components/Image';
import Aboutsection from '../components/aboutsection';
import Courses from '../components/courses';
import Howeork from '../components/howwork';
import Uniqueness from '../components/uniqueness';
import Keyachievements from '../components/keyachievements';
import StarRating from '../components/hu.jsx';
import Accredited from '../components/accredited.jsx';
import Footer from '../components/footer.jsx';

function Homepage() {
  return (
    <div>
<div>
  <Navbar/>
</div>
  <Image/>
<div>
    <Aboutsection/>
</div>
<div>
    <Courses/>
</div>
<div>
<Howeork/>
</div>
<div>
<Uniqueness/>
</div>
<div>
    <Keyachievements/>
</div>
<div>
<StarRating rating={4} />

</div>
<div>
<Accredited/>
</div>
<Footer/>
</div>
  )
}

export default Homepage