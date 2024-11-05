import React from 'react'

const Svg = ({width=48,height=48,children}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  width={width} height={height}>
        {children}
    </svg>
  )
}



export const HomeIcon = () => {
  return (
    <Svg>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M15 18H9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g>
    </Svg>
  )
}

export const SearchIcon = () => {
    return (
     <Svg>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#ffffff"></path> </g>
     </Svg>
    )
}


export const MessagesIcon = () => {
    return (
        <Svg>
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 14H18.8C19.2203 14 19.6364 13.9173 20.0246 13.7565C20.4128 13.5957 20.7656 13.3599 21.0627 13.0627C21.3599 12.7656 21.5957 12.4129 21.7565 12.0247C21.9173 11.6364 22 11.2203 22 10.8V5.20007C22 4.77984 21.9173 4.36371 21.7565 3.97546C21.5957 3.58722 21.3599 3.2344 21.0627 2.93726C20.7656 2.64011 20.4128 2.40447 20.0246 2.24365C19.6364 2.08284 19.2203 2 18.8 2H9.20001C8.77978 2 8.36371 2.08284 7.97546 2.24365C7.58722 2.40447 7.23446 2.64011 6.93732 2.93726C6.64017 3.2344 6.40441 3.58722 6.24359 3.97546C6.08278 4.36371 6 4.77984 6 5.20007V7.6001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.80005 19.6001L8.63 21.4401C9.00092 21.7888 9.49088 21.9829 10 21.9829C10.5091 21.9829 10.9991 21.7888 11.3701 21.4401L13.2 19.6001H14.8C15.6487 19.6001 16.4626 19.263 17.0627 18.6628C17.6629 18.0627 18 17.2487 18 16.4V10.8C18 9.95136 17.6629 9.13747 17.0627 8.53735C16.4626 7.93724 15.6487 7.6001 14.8 7.6001H5.20001C4.35132 7.6001 3.53743 7.93724 2.93732 8.53735C2.3372 9.13747 2 9.95136 2 10.8V16.4C2 17.2487 2.3372 18.0627 2.93732 18.6628C3.53743 19.263 4.35132 19.6001 5.20001 19.6001H6.80005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </Svg>
    )
}

export const ProfileIcon = () => {
    return (
        <Svg>
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2159.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M374,2009 C371.794,2009 370,2007.206 370,2005 C370,2002.794 371.794,2001 374,2001 C376.206,2001 378,2002.794 378,2005 C378,2007.206 376.206,2009 374,2009 M377.758,2009.673 C379.124,2008.574 380,2006.89 380,2005 C380,2001.686 377.314,1999 374,1999 C370.686,1999 368,2001.686 368,2005 C368,2006.89 368.876,2008.574 370.242,2009.673 C366.583,2011.048 364,2014.445 364,2019 L366,2019 C366,2014 369.589,2011 374,2011 C378.411,2011 382,2014 382,2019 L384,2019 C384,2014.445 381.417,2011.048 377.758,2009.673" id="profile-[#ffffff]"> </path> </g> </g> </g> </g>
        </Svg>
    )
}



export const WebsiteIcon = ({height=80,width=80,alt}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="amblem" width={height} height={width} viewBox="0 0 64.757 64.724" alt="kou">
  <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="32.297" cy="32.297" rx="32.297" ry="32.297" transform="translate(0 0.065)" fill="#fff"/>
  <circle id="Ellipse_2" data-name="Ellipse 2" cx="32.362" cy="32.362" r="32.362" transform="translate(0.033)" fill="#fff"/>
  <g id="Group_1" data-name="Group 1" transform="translate(0.033)">
    <path id="Path_1" data-name="Path 1" d="M262.211,572.465c0,.1-.033.522-.033.685v2.186c0,.294.033.555.424.62v.065h-1.3v-.065c.391-.033.424-.261.424-.62v-1.794c0-.326,0-.457-.13-.457a3.136,3.136,0,0,0-.359.1l-.033-.065a3.276,3.276,0,0,0,.979-.718Z" transform="translate(-233.601 -517.495)" fill="#121718"/>
    <path id="Path_2" data-name="Path 2" d="M267.259,575.988c.783-.163,1.142-1.044,1.272-1.6a1.388,1.388,0,0,1-.685.228,1.024,1.024,0,0,1-.946-1.076,1.106,1.106,0,0,1,1.109-1.142,1.209,1.209,0,0,1,1.142,1.3,2.369,2.369,0,0,1-1.892,2.349Zm1.4-2.381c0-.685-.294-1.077-.652-1.077s-.62.391-.62.979c0,.522.261.946.685.946a.97.97,0,0,0,.489-.163,2.17,2.17,0,0,0,.1-.685" transform="translate(-237.441 -517.495)" fill="#121718"/>
    <path id="Path_3" data-name="Path 3" d="M275.559,575.988c.783-.163,1.142-1.044,1.272-1.6a1.388,1.388,0,0,1-.685.228,1.024,1.024,0,0,1-.946-1.076,1.106,1.106,0,0,1,1.109-1.142,1.209,1.209,0,0,1,1.142,1.3,2.369,2.369,0,0,1-1.892,2.349Zm1.37-2.381c0-.685-.294-1.077-.652-1.077s-.62.391-.62.979c0,.522.261.946.685.946a.97.97,0,0,0,.489-.163,2.169,2.169,0,0,0,.1-.685" transform="translate(-243.033 -517.495)" fill="#121718"/>
    <path id="Path_4" data-name="Path 4" d="M282.963,573.248a1.225,1.225,0,0,1,1.142-.848.927.927,0,0,1,.979.913,1.161,1.161,0,0,1-.294.75c-.163.2-.424.489-.555.62l-.913.913h1.011c.555,0,.75-.1.881-.228l.065.065a1.194,1.194,0,0,0-.326.587H282.8v-.065c.228-.2.457-.457.881-.914.587-.652.913-1.109.913-1.6a.653.653,0,0,0-.652-.718,1.054,1.054,0,0,0-.881.587Z" transform="translate(-248.154 -517.495)" fill="#121718"/>
    <path id="Path_5" data-name="Path 5" d="M236.519,483.106a19,19,0,1,1,19.019-19.019,19.019,19.019,0,0,1-19.019,19.019" transform="translate(-204.157 -431.725)" fill="#09a350" fill-rule="evenodd"/>
    <path id="Path_6" data-name="Path 6" d="M244.189,480.38a2.859,2.859,0,0,1-.522.065l3.2,13.18v-13.31a.382.382,0,0,1-.294-.359.393.393,0,0,1,.783,0,.382.382,0,0,1-.294.359v13.31l3.2-13.147a2.534,2.534,0,0,1-.522-.065,2.478,2.478,0,0,1,.555-4.893h1.631a2.478,2.478,0,0,1,.555,4.893,2.852,2.852,0,0,1-.522.065l3.2,13.147v-13.31a.355.355,0,0,1-.294-.359.393.393,0,0,1,.783,0,.382.382,0,0,1-.294.359v13.31l3.2-13.147a2.853,2.853,0,0,1-.522-.065,2.474,2.474,0,0,1,.522-4.893h3.295v-4.372h.816l.359-.587h-1.468c.261-.163,1.174-.685.881-1.4a3.98,3.98,0,0,0-.587-.718,1.242,1.242,0,0,1-.391-1.044l.033-.163a.952.952,0,0,0-.555.2.7.7,0,0,0-.326.489,1.138,1.138,0,0,0,.489.913,1.823,1.823,0,0,1,.685,1.011,1.044,1.044,0,0,1-.261.718h-.163a.818.818,0,0,0,.228-.913c-.2-.457-.652-.718-.848-.979a1.383,1.383,0,0,1-.228-.62s-.522.457-.457.848.685.587.913.75a.981.981,0,0,1,.391.457.717.717,0,0,1-.033.457h-.163a.622.622,0,0,0,.1-.261.507.507,0,0,0-.228-.424,3.016,3.016,0,0,0-.75-.391c-.261-.1-.359-.489-.359-.522a.581.581,0,0,0-.163.489c.065.228.294.326.718.522a1.341,1.341,0,0,1,.62.587H259.62v.587h1.272c0,.1.033.163.033.261a2.45,2.45,0,0,1-2.447,2.447h-.033a2.478,2.478,0,0,1-2.479-2.479v-.2h0v-.228a1.976,1.976,0,1,0-1.664-.033v.261h0v.2a2.478,2.478,0,0,1-2.479,2.479h-1.631a2.478,2.478,0,0,1-2.479-2.479v-.2h0v-.261a1.956,1.956,0,1,0-2.806-1.762,2.044,2.044,0,0,0,1.142,1.794v.228h0v.2a2.478,2.478,0,0,1-2.479,2.479h-.033a2.527,2.527,0,0,1-1.729-.718,2.388,2.388,0,0,1-.718-1.729v-.261h1.272v-.587h-1.4a1.523,1.523,0,0,1,.62-.587c.457-.2.685-.294.718-.522.065-.228-.163-.489-.163-.489a.652.652,0,0,1-.359.522,3.015,3.015,0,0,0-.75.391.507.507,0,0,0-.228.424.622.622,0,0,0,.1.261h-.163a.717.717,0,0,1-.033-.457.981.981,0,0,1,.391-.457c.228-.163.848-.359.913-.75s-.457-.848-.457-.848a1.522,1.522,0,0,1-.228.62c-.2.261-.652.522-.848.979a.785.785,0,0,0,.228.913h0a1.228,1.228,0,0,1-.261-.718c.033-.359.391-.685.685-1.011a1.121,1.121,0,0,0,.457-.913.551.551,0,0,0-.326-.489,1.555,1.555,0,0,0-.587-.2l.033.163a1.3,1.3,0,0,1-.424,1.044,8.557,8.557,0,0,0-.587.718c-.294.718.62,1.24.881,1.4H239.1l.359.587h.816v4.372h3.295A2.478,2.478,0,0,1,246.049,478a2.272,2.272,0,0,1-1.86,2.381" transform="translate(-218.71 -446.615)" fill="#fff"/>
    <path id="Path_7" data-name="Path 7" d="M213.544,410.9a30.144,30.144,0,1,0,30.144,30.144A30.136,30.136,0,0,0,213.544,410.9m0,59.244h0a29.116,29.116,0,1,1,29.1-29.133,29.113,29.113,0,0,1-29.1,29.133" transform="translate(-181.182 -408.682)" fill="#09a350" fill-rule="evenodd"/>
    <path id="Path_8" data-name="Path 8" d="M211.745,534.417l-4.7,3.034-.685-1.011,2.153-1.37-3.164-.2-.75-1.175,3.262.294L209.3,530.6l.783,1.207-1.468,3.164,2.479-1.566Z" transform="translate(-195.466 -489.332)" fill="#121718"/>
    <path id="Path_9" data-name="Path 9" d="M200.63,513.931a2.314,2.314,0,0,1,1.142-.1,2.481,2.481,0,0,1,1.077.359,2.546,2.546,0,0,1,.881.783,2.626,2.626,0,0,1,.522,1.044,3.442,3.442,0,0,1,.13,1.011,3.507,3.507,0,0,1-.228,1.011,2.679,2.679,0,0,1-.75,1.044,2.866,2.866,0,0,1-1.109.62,3.461,3.461,0,0,1-1.142.1,2.482,2.482,0,0,1-1.077-.359,3.314,3.314,0,0,1-.881-.783,2.627,2.627,0,0,1-.522-1.044,3.461,3.461,0,0,1-.1-1.142,2.617,2.617,0,0,1,.359-1.109,2.745,2.745,0,0,1,.718-.881,2.637,2.637,0,0,1,.979-.555m2.642,2.349h0a1.5,1.5,0,0,0-.881-1.044,1.81,1.81,0,0,0-1.435-.1,2.016,2.016,0,0,0-1.142.848,1.56,1.56,0,0,0-.163,1.37,1.5,1.5,0,0,0,.881,1.044,2.066,2.066,0,0,0,2.577-.75,1.659,1.659,0,0,0,.163-1.37" transform="translate(-191.398 -478.013)" fill="#121718"/>
    <path id="Path_10" data-name="Path 10" d="M197.46,493.931a2.343,2.343,0,0,0-.489.718,1.844,1.844,0,0,0-.131.391,1.724,1.724,0,0,0-.033.424,1.806,1.806,0,0,0,.489,1.435,1.915,1.915,0,0,0,1.435.555,1.97,1.97,0,0,0,1.4-.457,1.7,1.7,0,0,0,.555-1.337,2.815,2.815,0,0,0-.13-.914,2.353,2.353,0,0,0-.457-.783l1.24.033a3.548,3.548,0,0,1,.326.816,4.049,4.049,0,0,1,.1.881,3.165,3.165,0,0,1-.881,2.186,2.929,2.929,0,0,1-2.12.816,2.883,2.883,0,0,1-2.088-.913,2.982,2.982,0,0,1-.783-2.251,2.749,2.749,0,0,1,.13-.881,2.111,2.111,0,0,1,.131-.424,2.454,2.454,0,0,1,.2-.424Z" transform="translate(-189.598 -464.537)" fill="#121718"/>
    <path id="Path_11" data-name="Path 11" d="M203.8,481.683l-4.7-3.719.424-1.3,6-.359-.424,1.3-1.272.065-.652,2.055,1.011.718Zm-.946-4.045h0l-1.925.065-.294-.033-.489-.065c.163.1.326.163.457.228l.261.163,1.533,1.109Z" transform="translate(-191.76 -452.746)" fill="#121718"/>
    <path id="Path_12" data-name="Path 12" d="M210.363,462.442l-4.763-2.969,1.729-2.773.881.522-1.109,1.794.946.587,1.142-1.762.848.522-1.109,1.794,1.207.75,1.109-1.794.848.522Z" transform="translate(-196.139 -439.54)" fill="#121718"/>
    <path id="Path_13" data-name="Path 13" d="M219.913,452.663l-4.013-3.915.848-.848,3.262,3.2,1.338-1.37.75.718Z" transform="translate(-203.079 -433.611)" fill="#121718"/>
    <path id="Path_14" data-name="Path 14" d="M225.1,435.023a.7.7,0,0,1-.1-.391.645.645,0,0,1,.2-.359.451.451,0,0,1,.392-.1.644.644,0,0,1,.359.2.429.429,0,0,1,.1.391.62.62,0,0,1-.228.359.508.508,0,0,1-.391.1.869.869,0,0,1-.326-.2m3.98,5.579h0l-3.328-4.535.979-.718,3.295,4.535Z" transform="translate(-209.21 -424.355)" fill="#121718"/>
    <path id="Path_15" data-name="Path 15" d="M251.432,422.13l.979,3.36a2.357,2.357,0,0,1-.1,1.794,2.7,2.7,0,0,1-1.6,1.044,2.741,2.741,0,0,1-1.925-.033,2.226,2.226,0,0,1-1.044-1.468l-.946-3.36,1.142-.326.913,3.164a1.494,1.494,0,0,0,.587.914,1.227,1.227,0,0,0,.979.1,1.158,1.158,0,0,0,.783-.587,1.518,1.518,0,0,0,0-1.077l-.913-3.164Zm-3.85-.2a.521.521,0,0,0,.228.294.526.526,0,0,0,.685-.2.546.546,0,0,0,.033-.392.521.521,0,0,0-.228-.294.472.472,0,0,0-.359-.033.52.52,0,0,0-.294.228.615.615,0,0,0-.065.391m1.37-.391h0a.355.355,0,0,1,.065-.359.415.415,0,0,1,.294-.228.545.545,0,0,1,.391.033.415.415,0,0,1,.228.294.546.546,0,0,1-.033.391.415.415,0,0,1-.294.228.545.545,0,0,1-.391-.033.538.538,0,0,1-.261-.326" transform="translate(-223.899 -415.443)" fill="#121718"/>
    <path id="Path_16" data-name="Path 16" d="M269.8,428.911l.163-5.611,1.24.033,2.381,3.328c.065.1.13.228.228.392.065.163.163.359.261.587a.636.636,0,0,0-.033-.228.718.718,0,0,0-.033-.261v-.587l.1-3.132,1.142.033-.163,5.611-1.174-.033-2.447-3.393c-.065-.1-.13-.228-.228-.391-.065-.163-.163-.359-.261-.62a2.467,2.467,0,0,1,.033.489v.62l-.1,3.2Z" transform="translate(-239.395 -417.037)" fill="#121718"/>
    <path id="Path_17" data-name="Path 17" d="M290.2,428.022l1.468-5.415,1.174.326-1.468,5.415Zm1.86-6.59h0a.521.521,0,0,1,.228-.294.562.562,0,0,1,.391-.065.617.617,0,0,1,.326.261.562.562,0,0,1,.065.391.6.6,0,0,1-.228.326.561.561,0,0,1-.391.065.463.463,0,0,1-.294-.261.5.5,0,0,1-.1-.424" transform="translate(-253.14 -415.528)" fill="#121718"/>
    <path id="Path_18" data-name="Path 18" d="M302.1,434.238l.62-5.937,1.174.587-.587,3.621-.1.391-.163.652a3.617,3.617,0,0,1,.391-.522c.065-.065.1-.131.163-.2s.1-.131.163-.163l2.512-2.61,1.174.587-4.372,4.078Z" transform="translate(-261.158 -420.405)" fill="#121718"/>
    <path id="Path_19" data-name="Path 19" d="M312.7,443.674l3.654-4.274,2.512,2.153-.652.783-1.6-1.37-.75.881,1.6,1.37-.652.75-1.6-1.338-.914,1.044,1.6,1.37-.685.783Z" transform="translate(-268.3 -427.884)" fill="#121718"/>
    <path id="Path_20" data-name="Path 20" d="M325.614,458.49l-.816-1.109,1.24-2.74-2.121,1.533-.718-.979,4.535-3.295,1.011,1.37a2.664,2.664,0,0,1,.587,1.468,1.4,1.4,0,0,1-.652,1.109,1.471,1.471,0,0,1-1.011.294,1.305,1.305,0,0,1-.913-.457Zm.913-4.176h0l.1.131a2.149,2.149,0,0,0,.685.685.581.581,0,0,0,.587-.13.681.681,0,0,0,.326-.555,1.715,1.715,0,0,0-.424-.881l-.1-.13Z" transform="translate(-275.375 -436.306)" fill="#121718"/>
    <path id="Path_21" data-name="Path 21" d="M332.559,470l.946.326a1.028,1.028,0,0,0-.294.555,1.49,1.49,0,0,0,.065.652.824.824,0,0,0,.457.522.738.738,0,0,0,.587.033c.228-.1.391-.457.424-1.044l.033-.457a2.877,2.877,0,0,1,.294-1.24,1.509,1.509,0,0,1,.685-.587,1.457,1.457,0,0,1,1.272.065,2.083,2.083,0,0,1,.946,1.142,1.4,1.4,0,0,1,.13.457,1.859,1.859,0,0,1,.033.424,1.6,1.6,0,0,1-.261.816l-.914-.392a.644.644,0,0,0,.2-.457,1,1,0,0,0-.065-.522.8.8,0,0,0-.392-.457.584.584,0,0,0-.522-.033c-.261.1-.391.489-.424,1.109v.294a2.6,2.6,0,0,1-.261,1.24,1.458,1.458,0,0,1-.718.685,1.67,1.67,0,0,1-1.37,0,2.035,2.035,0,0,1-.979-1.142,2.814,2.814,0,0,1-.228-1.109,1.35,1.35,0,0,1,.359-.881" transform="translate(-281.439 -447.59)" fill="#121718"/>
    <path id="Path_22" data-name="Path 22" d="M336.5,485.077l5.481-1.207.261,1.174-5.481,1.207Zm6.688-1.4h0a.562.562,0,0,1,.391.065.472.472,0,0,1,.228.326.561.561,0,0,1-.065.391.471.471,0,0,1-.326.228.561.561,0,0,1-.391-.065.472.472,0,0,1-.228-.326.561.561,0,0,1,.065-.392.746.746,0,0,1,.326-.228" transform="translate(-284.336 -457.706)" fill="#121718"/>
    <path id="Path_23" data-name="Path 23" d="M342.933,496.61l-4.567.2L338.3,495.6l4.6-.2-.065-1.37,1.011-.033.163,3.947L343,497.98Z" transform="translate(-285.548 -464.672)" fill="#121718"/>
    <path id="Path_24" data-name="Path 24" d="M337.087,509.7l5.513,1.044-.587,3.23-1.011-.2.392-2.055-1.142-.2-.391,2.055-.979-.2.359-2.055-1.37-.261-.391,2.088-.979-.2Z" transform="translate(-284.336 -475.25)" fill="#121718"/>
    <path id="Path_25" data-name="Path 25" d="M334.279,523.4l.424.913a1.074,1.074,0,0,0-.62.2.943.943,0,0,0-.391.489,1.033,1.033,0,0,0-.065.685.714.714,0,0,0,.391.424c.228.1.587-.033,1.044-.457l.359-.294a3.352,3.352,0,0,1,1.077-.652,1.467,1.467,0,0,1,.913.065,1.443,1.443,0,0,1,.848.946,2.224,2.224,0,0,1-.13,1.5,1.758,1.758,0,0,1-.228.424,1.4,1.4,0,0,1-.294.326,1.513,1.513,0,0,1-.75.391l-.359-.913a.779.779,0,0,0,.457-.163,1.125,1.125,0,0,0,.326-.424.964.964,0,0,0,.065-.587.653.653,0,0,0-.326-.392q-.391-.147-1.077.489l-.2.2a2.929,2.929,0,0,1-1.077.685,1.532,1.532,0,0,1-1.011-.033,1.562,1.562,0,0,1-.946-.979,2.046,2.046,0,0,1,.13-1.5,2.493,2.493,0,0,1,.62-.914,1.121,1.121,0,0,1,.816-.424" transform="translate(-281.723 -484.481)" fill="#121718"/>
    <path id="Path_26" data-name="Path 26" d="M327.652,536.5l4.665,3.1-.652,1.011-4.665-3.1Zm5.644,3.849h0a.472.472,0,0,1,.228.326.506.506,0,0,1-.065.391.6.6,0,0,1-.326.228.562.562,0,0,1-.391-.065.471.471,0,0,1-.228-.326.561.561,0,0,1,.065-.391.471.471,0,0,1,.326-.228.431.431,0,0,1,.391.065" transform="translate(-277.935 -493.307)" fill="#121718"/>
    <path id="Path_27" data-name="Path 27" d="M208.962,404.1a32.362,32.362,0,1,0,32.362,32.362A32.357,32.357,0,0,0,208.962,404.1m0,63.615h0a31.269,31.269,0,1,1,31.253-31.286,31.291,31.291,0,0,1-31.253,31.286" transform="translate(-176.6 -404.1)" fill="#121718" fill-rule="evenodd"/>
  </g>
</svg>
    )
}


export const PostIcons = ({width=48,height=48}) => {
  return (
    <Svg width={width} height={height}>
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 14L12.2728 19.3032C12.5856 20.0331 13.5586 20.1103 13.9486 19.4185C14.7183 18.0535 15.8591 15.8522 17 13C19 8 20 4 20 4C20 4 16 5 11 7C8.14784 8.14086 5.94647 9.28173 4.58149 10.0514C3.88975 10.4414 3.96687 11.4144 4.69678 11.7272L10 14Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
    </Svg>
  )
}


export const ImageIcon = ({width=48,height=48}) => {
  return(
    <Svg width={width} height={height}>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
  </Svg>
  )
}



export const EmojiIcon = ({width=48,height=48}) => {
  return(
    <Svg width={width} height={height}>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#ffffff"></ellipse> <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#ffffff"></ellipse> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"></path> </g>
   </Svg>
  )
}




export const MarketIcon = ({width=48,height=48}) => {
  return(
    <Svg width={width} height={height}>
   <svg fill="#ffffff" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M891 308H340q-6 0-10.5-4t-5.5-10l-32-164q-2-14-12-22.5T256 99H110q-15 0-25.5 10.5T74 135v5q0 15 10.5 26t25.5 11h102q4 0 7 2.5t4 6.5l102 544q3 19 20 28 8 5 18 5h17q-22 25-21 58.5t25 56.5 57.5 23 58-23 25.5-56.5-22-58.5h186q-23 25-21.5 58.5T693 878t57.5 23 57.5-23 25-56.5-21-58.5h17q15 0 25.5-10.5T865 727v-8q0-15-11-25.5T828 683H409q-6 0-10.5-4t-5.5-9l-10-54q-1-8 4-14t12-5h460q13 0 22.5-8t11.5-21l33-219q3-16-7.5-28.5T891 308z"></path></g></svg>
    </Svg>
  )
}


export const LikeIcon = ({width=48,height=48}) => {
  return ( 
    <Svg width={width} height={height}>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51C7.51 8.12 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12 16.5 9.51C16.49 12.66 13.58 14.51 12.28 14.96Z" fill="#ffffff"></path> </g>
    </Svg> 
     )
}

export const CommentIcon = ({width=48,height=48}) => {
return(
  <Svg width={width} height={height}>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11233)"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11233"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g>
  </Svg>
)
}


export const ShareIcon = ({width=48,height=48}) => {
  return( 
    <Svg width={width} height={height} >
     <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3C15 2.44772 15.4477 2 16 2C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4C15.4477 4 15 3.55228 15 3Z" fill="#ffffff"></path> <path d="M3.70663 12.7845L3.16104 12.2746L3.70664 12.7845C4.09784 12.3659 4.62287 11.8265 5.17057 11.3274C5.72852 10.8191 6.26942 10.3905 6.69641 10.1599C7.06268 9.96208 7.75042 9.84035 8.40045 9.84848C8.62464 9.85128 8.81365 9.86944 8.9559 9.89472C8.96038 10.5499 8.95447 11.7469 8.95145 12.2627C8.94709 13.0099 9.83876 13.398 10.3829 12.8878L14.9391 8.61636C15.2845 8.2926 15.2988 7.74908 14.971 7.4076L10.4132 2.65991C9.88293 2.10757 8.95 2.48291 8.95 3.24856V5.16793C8.5431 5.13738 8.0261 5.11437 7.47937 5.13009C6.5313 5.15734 5.30943 5.30257 4.4722 5.88397C4.36796 5.95636 4.26827 6.03539 4.17359 6.11781C2.49277 7.58092 2.11567 9.90795 1.8924 11.7685L1.87242 11.935C1.74795 12.9722 3.02541 13.5134 3.70663 12.7845ZM9.35701 11.7935L9.70204 12.1615L9.35701 11.7935C9.35715 11.7934 9.35729 11.7932 9.35744 11.7931L9.35701 11.7935Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g>
    </Svg>
  )
}


export const EyeSlashFilledIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
      fill="currentColor"
    />
    <path
      d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
      fill="currentColor"
    />
  </svg>
);


export const EyeFilledIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
  </svg>
);


export const ArrowIcon = (props) => (
<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#00ff6e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
);



export const PlayIcon = ({width=38,height=38}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24"  ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" ></rect> <path d="M16.7519 11.1679L10.5547 7.03647C9.89015 6.59343 9 7.06982 9 7.86852V16.1315C9 16.9302 9.89015 17.4066 10.5547 16.9635L16.7519 12.8321C17.3457 12.4362 17.3457 11.5638 16.7519 11.1679Z" stroke="#00ff9d" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Svg>
  )
}


export const PauseIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#86efac" d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M8.05611421,5.45454545 C8.43267199,5.45454545 8.73793239,5.75980585 8.73793239,6.13636364 L8.73793239,13.4084582 C8.73793239,13.7850159 8.43267199,14.0902763 8.05611421,14.0902763 C7.67955643,14.0902763 7.37429603,13.7850159 7.37429603,13.4084582 L7.37429603,6.13636364 C7.37429603,5.75980585 7.67955643,5.45454545 8.05611421,5.45454545 Z M12.6015688,5.45454545 C12.9781265,5.45454545 13.2833869,5.75980585 13.2833869,6.13636364 L13.2833869,13.4084582 C13.2833869,13.7850159 12.9781265,14.0902763 12.6015688,14.0902763 C12.225011,14.0902763 11.9197506,13.7850159 11.9197506,13.4084582 L11.9197506,6.13636364 C11.9197506,5.75980585 12.225011,5.45454545 12.6015688,5.45454545 Z"></path> </g></svg>
    </Svg>
  )
}

export const SpeakerIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Svg>
  )
}

export const MutedSpeakerIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8.14307C3.4148 8.66137 3 9.49393 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C12.6098 21 13.0337 19.3265 13.2717 17M3 3L21 21M9 4.60756C9.84604 3.71548 10.8038 3 12 3C12.7739 3 13.2484 5.69533 13.4233 9" stroke="#86efac" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Svg>
  )
}


export const  PictureInPictureIcon = ({width=28,height=28}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg viewBox="0 0 24 24" fill="#86efac"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zm-8.5-8L9.457 9.043l2.25 2.25-1.414 1.414-2.25-2.25L6 12.5V7h5.5z"></path> </g> </g></svg>
    </Svg>
  )
}

export const  FullScreenIcon = ({width=22,height=22}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg fill="#6ee7b7" viewBox="0 0 1920 1920"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1146.616-.012V232.38h376.821L232.391 1523.309v-376.705H0V1920h773.629v-232.39H396.69L1687.737 396.68V773.5h232.275V-.011z" fill-rule="evenodd"></path> </g></svg>
    </Svg>
  )
}


export const  ResSizeScreenIcon = ({width=30,height=30}) => {
  return( 
    <Svg width={width} height={height} className="bg-transparent">
      <svg  fill="#86efac" viewBox="0 0 36 36" version="1.1" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>resize-down-line</title> <path class="clr-i-outline clr-i-outline-path-1" d="M32,15H22.41l9.25-9.25a1,1,0,0,0-1.41-1.41L21,13.59V4a1,1,0,0,0-2,0V17H32a1,1,0,0,0,0-2Z"></path><path  d="M4,19a1,1,0,0,0,0,2h9.59L4.33,30.25a1,1,0,1,0,1.41,1.41L15,22.41V32a1,1,0,0,0,2,0V19Z"></path> </g></svg>
 </Svg>
  )
}

