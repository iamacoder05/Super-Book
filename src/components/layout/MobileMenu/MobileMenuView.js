import React, { useState } from 'react';
import casinoImage from '../../../assets/icons/casiono.svg'
import './MobileMenuView.css';
function MobileMenuView() {
  // const [activeOption, setActiveOption] = useState(null);

  // const handleOptionClick = (option) => {
  //   setActiveOption(option);
  // };

  const [activeTab, setActiveTab] = useState('home');
  

  const handleTabClick = (tab) => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
  };
  

  return (
    // <div className="fixed-footer">
    //   <div className="options">
    //     <div
    //       className={`option ${activeOption === 'option1' ? 'active' : ''}`}
    //       onClick={() => handleOptionClick('option1')}
    //     >
    //       Option 1
    //     </div>
    //     <div
    //       className={`option ${activeOption === 'option2' ? 'active' : ''}`}
    //       onClick={() => handleOptionClick('option2')}
    //     >
    //       Option 2
    //     </div>
    //     <div
    //       className={`option ${activeOption === 'option3' ? 'active' : ''}`}
    //       onClick={() => handleOptionClick('option3')}
    //     >
    //       Option 3
    //     </div>
    //   </div>
    // </div>

    
    <div className="tabbar tab-style1">
      <ul className="flex-center">
        <li
          className={`home ${activeTab === 'home' ? 'active' : ''}`}
          data-where="home"
          data-index="0"
          onClick={() => handleTabClick('home')}
        >

          <svg className='icons' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 358.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none">
<path d="M680 5115 c0 -3 37 -60 81 -127 l82 -121 -29 -21 c-54 -38 -146 -131 -195 -196 -175 -233 -221 -503 -132 -785 32 -103 97 -237 101 -210 41 272 131 433 324 576 58 43 230 138 250 139 4 0 45 -55 90 -122 l82 -123 81 410 c45 226 81 411 80 412 -1 2 -177 39 -391 83 -214 45 -397 83 -406 86 -10 3 -18 3 -18 -1z"/>
<path d="M965 3240 l-960 -960 143 -143 c81 -81 142 -150 142 -161 0 -10 -34 -213 -76 -450 -71 -398 -79 -434 -106 -474 -79 -115 -104 -235 -65 -313 10 -20 165 -182 345 -361 380 -378 370 -371 547 -372 85 -1 123 5 250 38 314 81 370 110 564 300 285 279 354 376 355 496 0 77 -22 128 -90 200 l-43 46 22 45 c15 31 22 62 22 104 0 71 -28 125 -98 193 l-44 43 20 57 c31 94 12 159 -76 249 l-50 52 121 128 c66 70 351 357 631 638 l511 510 -547 547 c-302 302 -550 548 -553 548 -3 0 -437 -432 -965 -960z m790 430 c4 -6 24 -19 46 -31 70 -35 181 -24 244 24 19 15 30 6 237 -200 l216 -216 -23 -36 c-57 -86 -51 -201 13 -274 15 -17 -2 -36 -276 -310 l-292 -292 -26 26 -26 26 38 49 c234 306 22 743 -361 744 -197 0 -370 -127 -435 -321 -19 -54 -21 -80 -18 -160 4 -80 10 -107 35 -160 41 -87 99 -157 166 -199 31 -19 56 -37 57 -40 0 -3 -110 -115 -245 -250 l-245 -245 -165 165 -165 165 30 59 c45 89 41 169 -13 250 l-20 28 604 604 c332 332 607 604 611 604 4 0 10 -5 13 -10z m-6 -1360 c76 -38 100 -143 55 -233 -9 -17 -108 -125 -220 -238 -169 -170 -204 -210 -204 -234 0 -38 26 -65 64 -65 25 0 47 16 128 97 l98 97 44 -43 c59 -58 63 -81 31 -147 -19 -39 -58 -83 -146 -165 -128 -121 -142 -146 -99 -189 38 -38 63 -27 179 80 l109 100 41 -45 c52 -56 58 -82 33 -138 -21 -47 -71 -102 -199 -218 -78 -71 -91 -103 -56 -141 34 -38 71 -24 173 67 52 47 97 85 100 85 10 0 56 -53 70 -79 18 -35 14 -94 -10 -140 -21 -42 -344 -389 -404 -435 -42 -31 -136 -79 -198 -100 -125 -42 -337 -88 -403 -89 -120 -1 -132 7 -457 331 -159 158 -299 302 -310 320 -18 30 -19 37 -8 78 7 24 33 74 57 111 l45 66 70 401 c38 221 72 407 74 415 3 10 48 -28 132 -112 122 -122 128 -129 124 -163 -5 -44 19 -74 62 -74 27 0 76 46 416 384 225 226 404 395 430 410 56 32 125 34 179 6z"/>
<path d="M3426 2643 c-17 -121 -71 -263 -135 -357 -68 -101 -237 -234 -375 -296 l-66 -29 -82 122 c-45 67 -83 117 -85 110 -2 -6 -39 -189 -82 -408 -52 -264 -74 -398 -67 -401 17 -6 779 -164 793 -164 7 0 -24 55 -68 123 l-79 122 27 23 c181 153 282 298 339 489 33 111 38 296 10 408 -25 103 -104 305 -120 305 -2 0 -7 -21 -10 -47z"/>
</g>
</svg>
          
          <span className='element-text'>Exchange</span>
          
        </li>
        <li
          className={`products ${activeTab === 'products' ? 'active' : ''}`}
       
          onClick={() => handleTabClick('products')}
        >
          <svg className='icons' xmlns="http://www.w3.org/2000/svg" version="1.0"  viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none">
<path d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33 -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71 167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m85 -96 l0 -100 -34 0 c-30 0 -35 4 -41 31 -4 17 -21 46 -38 65 -30 35 -30 35 -10 55 19 19 84 48 111 49 9 0 12 -26 12 -100z m111 74 c50 -25 54 -40 21 -78 -17 -19 -33 -48 -37 -65 -6 -27 -11 -31 -41 -31 l-34 0 0 101 0 101 33 -7 c17 -4 44 -13 58 -21z m-224 -110 c34 -58 31 -64 -33 -64 l-56 0 7 33 c9 42 33 79 48 74 7 -2 22 -21 34 -43z m307 24 c8 -13 17 -38 21 -55 l7 -33 -57 0 c-57 0 -57 0 -50 27 7 31 42 83 55 83 5 0 16 -10 24 -22z m-284 -120 c0 -19 -43 -91 -57 -95 -15 -5 -39 32 -48 75 l-7 32 56 0 c38 0 56 -4 56 -12z m90 -89 l0 -101 -32 7 c-41 9 -81 29 -97 49 -11 13 -9 21 17 50 17 19 33 48 37 65 6 27 11 31 41 31 l34 0 0 -101z m95 70 c4 -17 20 -46 37 -65 26 -29 28 -37 17 -50 -16 -20 -56 -40 -96 -49 l-33 -7 0 101 0 101 34 0 c30 0 35 -4 41 -31z m120 -1 c-9 -43 -33 -80 -48 -75 -14 4 -57 76 -57 95 0 8 18 12 56 12 l56 0 -7 -32z"/>
</g>
</svg>
          <span className='element-text'>Sports</span>
        </li>
        <li
          className={`services ${activeTab === 'services' ? 'active' : ''}`}
      
          onClick={() => handleTabClick('services')}
        >
          <svg className='icons' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none">
<path d="M2420 5114 c-322 -40 -591 -171 -815 -398 -199 -201 -313 -415 -372 -696 -24 -118 -24 -382 0 -500 59 -281 174 -496 372 -696 201 -203 421 -322 705 -381 117 -24 380 -24 502 0 270 54 494 174 694 372 202 199 322 421 381 705 24 118 24 382 0 500 -39 185 -110 356 -212 510 -63 95 -258 291 -351 352 -161 107 -335 180 -506 213 -81 16 -328 28 -398 19z m380 -322 c198 -52 365 -146 501 -281 135 -135 226 -297 282 -501 29 -109 29 -371 0 -480 -56 -204 -147 -366 -282 -501 -135 -135 -297 -226 -501 -282 -109 -29 -371 -29 -480 0 -204 56 -366 147 -501 282 -386 387 -411 1000 -57 1421 153 182 404 323 638 359 98 15 311 6 400 -17z"/>
<path d="M2023 2104 c-560 -68 -1065 -385 -1390 -874 -191 -286 -300 -624 -319 -985 -6 -111 -5 -124 15 -163 14 -28 34 -48 61 -62 39 -20 54 -20 2170 -20 2116 0 2131 0 2170 20 27 14 47 34 61 62 20 39 21 52 15 163 -26 493 -214 925 -556 1279 -324 335 -742 539 -1199 586 -151 15 -889 11 -1028 -6z m1012 -294 c663 -76 1219 -543 1404 -1181 30 -101 61 -258 61 -305 l0 -24 -1940 0 -1940 0 0 29 c0 54 41 242 74 345 109 332 317 618 603 831 102 76 328 192 458 234 99 33 216 58 322 70 102 12 854 12 958 1z"/>
</g>
</svg>

           <span className='element-text'>Profile</span>
        </li>
        <li
          className={`about ${activeTab === 'about' ? 'active' : ''}`}
         
          onClick={() => handleTabClick('about')}
        >
           
           <svg className="animated-casino icons" version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 130.000000 130.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,130.000000) scale(0.100000,-0.100000)"
fill="#ff0000" stroke="none">
<path d="M548 1290 c-70 -12 -145 -39 -213 -74 -79 -40 -210 -172 -252 -251
-105 -201 -105 -429 0 -630 42 -79 173 -210 252 -252 201 -105 429 -105 630 0
79 42 210 173 252 252 105 201 105 429 0 630 -42 79 -173 210 -252 252 -124
65 -297 95 -417 73z m210 -150 l3 -65 -111 0 -110 0 0 61 c0 33 3 64 7 68 4 4
52 5 107 4 l101 -3 3 -65z m-435 -164 c9 -6 17 -13 17 -16 0 -3 -18 -29 -39
-58 -22 -28 -45 -68 -51 -87 -6 -19 -15 -35 -18 -35 -4 0 -31 14 -59 30 -49
28 -52 32 -43 55 15 40 36 77 70 123 l31 43 37 -22 c20 -13 45 -28 55 -33z
m796 -14 c17 -26 37 -64 46 -84 l15 -38 -52 -30 c-29 -16 -56 -30 -60 -30 -3
0 -12 16 -18 35 -6 19 -29 59 -51 87 -21 29 -39 55 -39 58 0 3 24 19 52 37 60
36 62 35 107 -35z m-324 4 c70 -32 140 -102 173 -174 36 -77 38 -202 4 -275
-104 -230 -393 -287 -567 -112 -71 71 -100 141 -100 245 0 71 5 94 27 142 44
95 136 173 235 198 61 15 167 4 228 -24z m-544 -481 c10 -26 32 -65 49 -86 16
-21 30 -40 30 -43 0 -10 -103 -67 -114 -63 -13 6 -69 97 -90 148 l-15 36 52
30 c29 17 56 30 61 29 4 -1 17 -24 27 -51z m886 21 l52 -29 -15 -36 c-21 -51
-77 -142 -90 -148 -11 -4 -114 53 -114 63 0 2 15 24 34 48 19 25 40 62 46 83
15 47 20 55 29 51 3 -2 30 -16 58 -32z m-379 -346 l-3 -65 -105 0 -105 0 -3
65 -3 65 111 0 111 0 -3 -65z"/>
<path d="M632 908 c-6 -6 -12 -20 -12 -30 0 -11 -13 -23 -32 -31 -46 -20 -69
-49 -75 -94 -7 -52 23 -87 101 -123 74 -33 92 -51 77 -78 -13 -25 -51 -32
-103 -20 -52 11 -68 5 -68 -25 0 -31 15 -43 63 -51 31 -6 37 -11 37 -32 0 -13
7 -27 15 -30 21 -8 45 14 45 40 0 16 10 25 35 35 48 17 75 55 75 105 0 58 -21
82 -106 122 -52 25 -74 41 -74 54 0 32 26 43 84 36 60 -7 83 7 71 44 -4 14
-18 22 -45 26 -33 5 -39 11 -42 33 -3 28 -27 38 -46 19z"/>
</g>
</svg><span className='element-text'> Casino</span>
        </li>
        <li
          className={`help ${activeTab === 'help' ? 'active' : ''}`}
        
          onClick={() => handleTabClick('help')}
        >
          <svg className = 'icons' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none">
<path d="M3987 4962 c-33 -20 -45 -50 -102 -267 -49 -186 -54 -228 -27 -263 36 -47 135 -42 162 7 22 42 120 441 114 465 -8 35 -59 76 -92 76 -15 0 -39 -8 -55 -18z"/>
<path d="M2709 4750 c-57 -10 -118 -40 -155 -78 -16 -16 -327 -409 -692 -873 l-663 -845 -397 -229 c-218 -125 -434 -252 -479 -282 -146 -95 -242 -223 -294 -393 -20 -62 -24 -96 -23 -200 0 -109 4 -135 28 -205 101 -297 361 -485 669 -485 72 0 124 9 245 42 7 2 112 -169 267 -437 282 -488 315 -534 423 -587 63 -31 73 -33 172 -33 93 0 112 3 162 27 68 31 147 103 183 163 58 100 69 234 27 341 -11 27 -86 164 -167 304 -81 140 -149 259 -152 266 -2 6 57 46 132 89 74 42 142 87 150 98 29 42 19 87 -50 207 -63 110 -72 130 -59 130 3 0 360 70 793 154 432 85 879 173 994 195 114 23 220 47 235 55 46 24 113 95 134 143 25 57 34 145 19 199 -6 23 -77 156 -157 295 -80 140 -159 277 -175 306 l-30 51 110 165 c60 91 112 179 116 195 7 36 6 38 -122 259 -52 90 -107 172 -121 184 -25 20 -35 21 -127 15 -55 -3 -149 -8 -210 -12 l-110 -6 -185 323 c-102 178 -202 343 -224 366 -66 73 -170 109 -267 93z m109 -218 c27 -20 1191 -2033 1199 -2074 12 -62 -36 -112 -116 -120 l-33 -3 -614 1063 c-473 819 -612 1067 -605 1080 12 22 62 68 81 75 22 8 61 -1 88 -21z m270 -1247 c314 -544 570 -990 569 -992 -5 -4 -1740 -344 -1742 -341 -19 25 -525 914 -523 919 9 26 1112 1419 1118 1412 4 -4 264 -453 578 -998z m704 381 l69 -119 -58 -88 c-32 -49 -62 -88 -66 -86 -4 1 -59 91 -122 200 -130 224 -130 204 5 210 41 2 81 3 89 3 7 -1 45 -54 83 -120z m-2308 -1366 c135 -233 244 -425 243 -426 -6 -6 -770 -445 -803 -462 -291 -148 -650 31 -714 356 -34 170 41 371 176 476 70 53 837 496 846 488 3 -4 117 -198 252 -432z m400 -693 l45 -77 -22 -14 c-127 -78 -149 -88 -158 -75 -25 37 -91 161 -88 163 25 20 166 93 170 88 4 -4 28 -42 53 -85z m-144 -549 c270 -469 284 -501 262 -577 -44 -143 -233 -191 -335 -83 -22 24 -508 855 -521 892 -4 11 43 43 162 112 92 53 169 97 172 97 3 0 120 -198 260 -441z"/>
<path d="M1267 2069 c-29 -17 -49 -68 -43 -105 12 -60 90 -94 147 -64 53 29 61 121 12 160 -28 22 -86 26 -116 9z"/>
<path d="M905 1859 c-22 -12 -67 -37 -99 -56 -32 -19 -72 -37 -87 -40 -37 -7 -84 12 -104 44 -21 31 -77 55 -110 47 -62 -15 -94 -101 -58 -154 69 -104 182 -154 305 -136 54 8 252 115 291 157 38 41 37 90 -2 130 -36 36 -79 38 -136 8z"/>
<path d="M4710 4397 c-336 -187 -327 -181 -339 -224 -18 -65 23 -123 87 -123 53 0 616 310 644 355 40 64 -5 145 -80 145 -29 0 -97 -33 -312 -153z"/>
<path d="M4435 3586 c-46 -46 -43 -112 6 -148 14 -10 117 -44 229 -74 163 -44 212 -53 239 -47 71 17 100 109 50 159 -21 20 -69 37 -228 80 -230 61 -261 65 -296 30z"/>
</g>
</svg>

           <span className='element-text'>Promotion</span>
        </li>
        {/* <li className="follow"></li> */}
        
      </ul>
    </div>
  
  );
}

export default MobileMenuView;
