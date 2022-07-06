import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss() {
    let background = 'https://www.covalenthq.com/static/images/backgrounds/covalent-backgrounds/covalent-9.jpg';

    return `

    body {
        background-image: url(${background});
        background-size:cover;
        height: 100vh;
        padding-left: 80px;
        padding-right: 80px;
        display:flex;
        flex-direction:column;
        justify-content: flex-end;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo {
        position:fixed;
        top:80px;
        left:80px;
        width: 550px;

    }

    .footer {
        display:flex;
        width: 100%;
        justify-content: space-between;
        align-items:center;
        height:200px;
        border-top: solid #FF4C8B 2px;
    }


    .socials {
        display:flex;
        align-items:center;
        justify-content:center;
        height:50%;
        font-size:40px;
        color:white;
        font-weight:400;
    }

    .socials > svg {
        margin-right:20px;
    }

    .header {
        width:100%;
        font-size:100px;
        color:white;
        word-wrap: break-word;
        margin-bottom:20px;
    }

    .subtitle {
        position:fixed;
        top:100px;
        right:60px;
        color:white;
        font-size:40px;
        font-weight:bold;
        letter-spacing: 0.4em;
        text-transform: uppercase;
    }

    .second-br { 
        margin-top:-25px;
    }

`

}





export function getHtml(parsedReq: ParsedRequest) {
    const { text, subtitle } = parsedReq;

    return `<!DOCTYPE html>
<html>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;600&display=swap" rel="stylesheet">
    </head>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div>
            <img class="logo" src="https://www.covalenthq.com/static/images/branding/full-horizontal/horizontal-tri-white.png">
        </div>
        <div class="subtitle">
            ${emojify(
            sanitizeHtml(subtitle)
            )}
        </div>
        <label class="header">
         ${ text != "" ? emojify(sanitizeHtml(text)) : `One unified API <br/> <span class="second-br"> One billion possibilities </span>`}
        </label>
        <div class="footer">
            <div class="socials">
                <svg width="60" height="60" viewBox="0 0 32 32" fill="#FF4C8B" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M28.7106 9.48225C28.7309 9.7665 28.7309 10.0508 28.7309 10.3351C28.7309 19.0051 22.132 28.9949 10.0711 28.9949C6.35531 28.9949 2.90356 27.9188 0 26.0508C0.527937 26.1117 1.0355 26.132 1.58375 26.132C4.64969 26.132 7.47206 25.0965 9.72587 23.33C6.84262 23.2691 4.42637 21.3808 3.59387 18.7818C4 18.8426 4.40606 18.8833 4.8325 18.8833C5.42131 18.8833 6.01019 18.802 6.55837 18.6599C3.55331 18.0508 1.29944 15.4112 1.29944 12.2234V12.1422C2.1725 12.6295 3.18781 12.9341 4.26387 12.9746C2.49737 11.7969 1.34006 9.78682 1.34006 7.51269C1.34006 6.29444 1.66487 5.17769 2.23344 4.20306C5.46187 8.18275 10.3147 10.7817 15.7562 11.066C15.6547 10.5787 15.5938 10.0711 15.5938 9.5635C15.5938 5.94925 18.5177 3.00513 22.1522 3.00513C24.0405 3.00513 25.7461 3.797 26.9441 5.07619C28.4262 4.79194 29.8476 4.24369 31.1065 3.49244C30.6191 5.01531 29.5836 6.2945 28.2232 7.10663C29.5431 6.96457 30.8222 6.599 31.9999 6.09144C31.1066 7.39088 29.9898 8.54819 28.7106 9.48225Z" fill="#FF4C8B"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="32" height="32" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                @Covalent_HQ
            </div>
            <div class="socials">
                <svg width="60" height="60" viewBox="0 0 28 32" fill="#FF4C8B" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M27.9187 6.16244L23.6937 26.0874C23.375 27.4937 22.5437 27.8437 21.3625 27.1812L14.925 22.4374L11.8187 25.4249C11.475 25.7687 11.1875 26.0562 10.525 26.0562L10.9875 19.4999L22.9187 8.71869C23.4375 8.25619 22.8062 7.99994 22.1125 8.46244L7.36249 17.7499L1.01249 15.7624C-0.368764 15.3312 -0.393764 14.3812 1.29999 13.7187L26.1375 4.14994C27.2875 3.71869 28.2937 4.40619 27.9187 6.16244Z" fill="#FF4C8B"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="28" height="32" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                covalenthq.com/telegram
            </div>
            <div class="socials">
                <svg width="65" height="65" viewBox="0 0 101 101" fill="#FF4C8B" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M83.4623 27.063C83.4623 27.063 94.25 46.4825 94.25 70.4406C94.25 70.4406 87.8823 81.2292 71.3262 81.75C71.3262 81.75 68.6293 78.5506 66.3819 75.7233C76.1956 72.9703 79.9414 66.8692 79.9414 66.8692C76.8699 68.8781 73.9482 70.2918 71.3262 71.259C55.1857 77.992 37.2244 75.6878 24.5796 68.6549C24.5428 68.6305 24.4083 68.5537 24.2099 68.4405C23.5892 68.0863 22.3433 67.3754 21.5081 66.7948C21.5081 66.7948 25.104 72.7471 34.6182 75.5745C32.3707 78.4018 29.5989 81.75 29.5989 81.75C13.0428 81.2292 6.75 70.4406 6.75 70.4406C6.75 46.4825 17.5377 27.063 17.5377 27.063C28.3253 19.0274 38.5886 19.2506 38.5886 19.2506L39.3378 20.1435C25.8532 24.0125 19.6353 29.8904 19.6353 29.8904C19.6353 29.8904 21.2834 28.9975 24.0552 27.7327C41.3171 20.2019 62.2209 20.2036 80.0163 29.8904C80.0163 29.8904 74.098 24.3101 61.3626 20.4411L62.4114 19.2506C62.4114 19.2506 72.6747 19.0274 83.4623 27.063ZM36.491 47.0033C32.2209 47.0033 28.8497 50.7235 28.8497 55.2622C28.8497 59.8008 32.2958 63.521 36.491 63.521C40.7611 63.521 44.1323 59.8008 44.1323 55.2622C44.2072 50.7235 40.7611 47.0033 36.491 47.0033ZM63.8348 63.521C68.1049 63.521 71.476 59.8008 71.476 55.2622C71.476 50.7235 68.1049 47.0033 63.8348 47.0033C59.5646 47.0033 56.1935 50.7235 56.1935 55.2622C56.1935 59.8008 59.6396 63.521 63.8348 63.521Z" stroke="#FF4C8B" stroke-width="3" stroke-linejoin="round"/>
                </svg>
                covalenthq.com/discord
            </div>
            <div class="socials">
                <svg width="60" height="60" viewBox="0 0 32 32" fill="#FF4C8B" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6778 11.5333C22.0333 11.5333 22.3778 11.55 22.7222 11.5944C21.8 7.23889 17.1278 4 11.8167 4C5.86111 4 1 8.04444 1 13.1889C1 16.1556 2.62778 18.6056 5.32778 20.5L4.25556 23.7556L8.03333 21.8611C9.38889 22.1278 10.4667 22.4 11.8222 22.4C12.1667 22.4 12.4944 22.3833 12.8389 22.3556C12.6167 21.6389 12.4944 20.8778 12.4944 20.0889C12.4889 15.3722 16.5444 11.5333 21.6778 11.5333ZM15.8722 8.59444C16.6778 8.59444 17.2167 9.13333 17.2167 9.95C17.2167 10.7556 16.6778 11.2944 15.8722 11.2944C15.05 11.2944 14.2444 10.7556 14.2444 9.95C14.25 9.13333 15.0556 8.59444 15.8722 8.59444ZM8.29445 11.2944C7.48889 11.2944 6.66667 10.7556 6.66667 9.95C6.66667 9.12778 7.48889 8.59444 8.29445 8.59444C9.11667 8.59444 9.65 9.13333 9.65 9.95C9.65 10.7611 9.11667 11.2944 8.29445 11.2944ZM31.5556 19.9667C31.5556 15.6389 27.2278 12.1167 22.3667 12.1167C17.2167 12.1167 13.1778 15.6389 13.1778 19.9667C13.1778 24.2944 17.2222 27.8167 22.3667 27.8167C23.4389 27.8167 24.5278 27.5333 25.6222 27.2667L28.5889 28.8944L27.7667 26.1944C29.9444 24.5611 31.5556 22.4 31.5556 19.9667ZM19.3833 18.6056C18.8444 18.6056 18.3111 18.0667 18.3111 17.5167C18.3111 16.9778 18.85 16.4444 19.3833 16.4444C20.2056 16.4444 20.7389 16.9833 20.7389 17.5167C20.7389 18.0722 20.2 18.6056 19.3833 18.6056ZM25.3333 18.6056C24.7944 18.6056 24.2611 18.0667 24.2611 17.5167C24.2611 16.9778 24.8 16.4444 25.3333 16.4444C26.1389 16.4444 26.6889 16.9833 26.6889 17.5167C26.6944 18.0722 26.1389 18.6056 25.3333 18.6056Z" fill="#FF4C8B"/>
                </svg>
                @Covalent_HQ
            </div>
        </div>
    </body>
</html>`;
}
