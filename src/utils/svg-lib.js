import React from 'react'

const SVGImage = ({type=""}) => {
  return (
    <>
      {type==="winner"?(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            style={{
                shapeRendering: "auto",
                display: "block",
                background: "#ff9d00",
            }}
            viewBox="0 0 800 600"
        >
            <g transform="translate(400 300)">
            <path
                fill="#ffb700"
                d="M0 0h600l-36.184 205.212ZM0 0l459.627 385.673L300 519.615ZM0 0l104.189 590.885H-104.19ZM0 0l-300 519.615-159.627-133.942ZM0 0l-563.816 205.212L-600 0ZM0 0l-563.816-205.212 104.19-180.46ZM0 0l-300-519.615 195.811-71.27ZM0 0l104.189-590.885L300-519.615ZM0 0l459.627-385.673 104.189 180.46Z"
            />
            <path
                fill="#ffcd4c"
                d="M58.5 0a22.462 22.462 0 0 0-13.686 37.603 22.462 22.462 0 0 0-34.656 20.008 22.462 22.462 0 0 0-39.408-6.949 22.462 22.462 0 0 0-25.722-30.654 22.462 22.462 0 0 0 0-40.016A22.462 22.462 0 0 0-29.25-50.662a22.462 22.462 0 0 0 39.408-6.95 22.462 22.462 0 0 0 34.656 20.009A22.462 22.462 0 0 0 58.5 0"
            />
            <animateTransform
                attributeName="transform"
                dur="2s"
                keyTimes="0;1"
                repeatCount="indefinite"
                type="rotate"
                values="0 0 0;80 0 0"
            />
            </g>
        </svg>
      ):type==="quiz"?(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            style={{
                shapeRendering: "auto",
                display: "block",
                background: "#ece9e2",
            }}
            viewBox="0 0 500 350"
        >
            <defs>
            <g id="o">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M0 0c0 8.666 7.034 15.7 15.7 15.7v-31.4C7.034-15.7 0-8.666 0 0z"
                />
            </g>
            <g id="m">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M-15.7-15.7V2.638C-14.099 1.068-11.995 0-9.765-.22c2.166-.188 4.333.314 6.5.314 3.548 0 7.19-1.538 9.168-4.521C7.065-6.154 7.6-8.29 8.98-9.828c1.288-1.445 3.266-2.23 5.213-2.073.502.032 1.005.157 1.476.314V-15.7H-15.7z"
                />
            </g>
            <g id="h">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M0 0c8.666 0 15.7 7.034 15.7 15.7h-31.4C-15.7 7.034-8.666 0 0 0z"
                />
                <path
                fill="#2c7878"
                d="M0-15.7c8.666 0 15.7 7.034 15.7 15.7h-31.4c0-8.666 7.034-15.7 15.7-15.7z"
                />
            </g>
            <g id="a">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M0 14.915c-8.227 0-14.915-6.688-14.915-14.915S-8.227-14.915 0-14.915 14.915-8.227 14.915 0 8.227 14.915 0 14.915zm0-26.69C-6.5-11.775-11.775-6.5-11.775 0S-6.5 11.775 0 11.775 11.775 6.5 11.775 0 6.5-11.775 0-11.775z"
                />
                <path
                fill="#005cff"
                d="M0 8.635c-4.773 0-8.635-3.862-8.635-8.635S-4.773-8.635 0-8.635 8.635-4.773 8.635 0 4.773 8.635 0 8.635zm0-14.13c-3.014 0-5.495 2.48-5.495 5.495S-3.015 5.495 0 5.495 5.495 3.015 5.495 0 3.015-5.495 0-5.495z"
                />
            </g>
            <g id="b">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="m-5.087 0 5.81-14.538c.156-.377.219-.785.219-1.162h-6.531L-11.4-1.162a2.984 2.984 0 0 0 0 2.324l5.81 14.538H.942c0-.377-.063-.785-.22-1.162L-5.087 0z"
                />
                <path
                fill="#2c7878"
                d="m5.903 0 5.81-14.538c.156-.377.219-.785.219-1.162H5.401L-.41-1.162a2.984 2.984 0 0 0 0 2.324L5.402 15.7h6.531c0-.377-.063-.785-.22-1.162L5.903 0z"
                />
            </g>
            <g id="f">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path fill="#e07400" d="M0 15.7-9.546 0 0-15.7 9.546 0z" />
            </g>
            <g id="e" transform="matrix(.314 0 0 .314 -15.7 -15.7)">
                <path fill="#d8d0bb" d="M0 0h100v100H0z" />
                <circle cx={50} cy={50} r={50} fill="#e07400" />
            </g>
            <g id="d">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M-15.7-15.7v31.4h31.4v-31.4h-31.4zm26.69 26.69h-21.98v-21.98h21.98v21.98z"
                />
                <path fill="#2c7878" d="M-6.28-6.28H6.28V6.28H-6.28z" />
            </g>
            <g id="g">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M3.171-3.454-3.862 8.478c-.189.345-.722.22-.754-.188l-.22-7.38a.363.363 0 0 0-.376-.376l-6.94-.471c-.314-.032-.502-.408-.282-.66l9.796-11.649c.252-.314.754-.094.691.314l-1.319 8.195c-.031.252.189.503.44.471l5.62-.753a.367.367 0 0 1 .377.565zM12.403 3.83l-4.27 7.254c-.189.346-.723.22-.754-.188l-.126-4.302a.363.363 0 0 0-.376-.377l-4.208-.282c-.314-.032-.502-.409-.283-.66l5.966-7.128c.252-.314.754-.094.691.314l-.785 4.742c-.031.251.189.502.44.47l3.265-.439c.377-.063.597.283.44.597z"
                />
            </g>
            <g id="c">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M12.026-7.253c-.345-.157-.722-.314-1.099-.283-.848.063-1.319.973-1.601 1.758-.691 1.759-1.413 3.486-2.104 5.244C4.867-3.203 2.543-5.872.188-8.54 0-8.76-.22-8.98-.502-9.01c-.283-.032-.566.125-.785.313-1.539 1.162-2.826 2.67-3.768 4.333-.252.44-.566.942-1.068.88-.251-.032-.471-.189-.66-.377-1.475-1.288-2.951-2.606-4.427-3.894-.314-.282-.66-.565-1.067-.565-.44-.031-.817.251-1.162.534a28.027 28.027 0 0 0-2.292 2.04V6.595l2.449-2.355a32.918 32.918 0 0 0 5.15 4.176 14.91 14.91 0 0 1 1.82-5.118c.315-.534.723-1.099 1.32-1.256.753-.22 1.507.251 2.135.66 2.763 1.852 5.463 3.642 8.195 5.463a13.785 13.785 0 0 1 5.432-4.333 49.26 49.26 0 0 0 4.93 2.606v-11.9a98.61 98.61 0 0 0-3.674-1.79z"
                />
                <path
                fill="#005cff"
                d="M5.338 8.164C2.606 6.343-.094 4.553-2.826 2.732c-.628-.44-1.382-.88-2.135-.66-.597.157-1.005.723-1.319 1.256-.942 1.57-1.539 3.329-1.821 5.119a31.22 31.22 0 0 1-5.15-4.177L-15.7 6.625V15.7h31.4V6.437a52.517 52.517 0 0 1-4.93-2.606 13.785 13.785 0 0 0-5.432 4.333z"
                />
            </g>
            <g id="k">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#005cff"
                d="M-13.533-13.533V1.633A11.86 11.86 0 0 0-1.664 13.502V-1.664c0-6.531-5.307-11.87-11.87-11.87z"
                />
                <path
                fill="#e07400"
                d="M.565-1.664v15.166a11.86 11.86 0 0 0 11.87-11.87v-15.165C5.871-13.533.564-8.195.564-1.664z"
                />
            </g>
            <g id="l">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#005cff"
                d="M-13.533 13.533V-1.633A11.86 11.86 0 0 1-1.664-13.502V1.664c0 6.531-5.307 11.87-11.87 11.87z"
                />
                <path
                fill="#e07400"
                d="M.565-1.664v15.166a11.86 11.86 0 0 0 11.87-11.87v-15.165C5.871-13.533.564-8.195.564-1.664z"
                />
            </g>
            <g id="n">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M0 0c0 8.666-7.034 15.7-15.7 15.7V0H0zM0-15.7c-8.666 0-15.7 7.034-15.7 15.7H0v-15.7z"
                />
                <path fill="#005cff" d="M15.7 0v-15.7H0C0-7.034 7.034 0 15.7 0z" />
                <path fill="#e07400" d="M0 15.7c8.666 0 15.7-7.034 15.7-15.7H0v15.7z" />
            </g>
            <g id="i" transform="matrix(.314 0 0 .314 -15.7 -15.7)">
                <path fill="#d8d0bb" d="M0 0h100v100H0z" />
                <circle cx={25} cy={25} r={25} fill="#e07400" />
                <circle cx={75} cy={25} r={25} fill="#005cff" />
                <circle cx={25} cy={75} r={25} fill="#2c7878" />
                <circle cx={75} cy={75} r={25} fill="#e07400" />
            </g>
            <g id="p">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path fill="#005cff" d="M0 0c0 8.666-7.034 15.7-15.7 15.7V0H0z" />
                <path
                fill="#e07400"
                d="M0-15.7c-8.666 0-15.7 7.034-15.7 15.7H0v-15.7zM15.7 15.7C7.034 15.7 0 8.666 0 0h15.7v15.7z"
                />
            </g>
            <g id="j">
                <path fill="#d8d0bb" d="M-15.7-15.7h31.4v31.4h-31.4z" />
                <path
                fill="#e07400"
                d="M9.891-1.853h2.669v3.706H9.891c-.251 1.381-.785 2.7-1.601 3.83l1.884 1.884-2.607 2.607L5.683 8.29a10.583 10.583 0 0 1-3.83 1.601v2.669h-3.706V9.891c-1.381-.251-2.7-.785-3.83-1.601l-1.884 1.884-2.607-2.607 1.884-1.884a10.583 10.583 0 0 1-1.601-3.83h-2.669v-3.706h2.669c.251-1.381.785-2.7 1.601-3.83l-1.884-1.884 2.607-2.607 1.884 1.884a10.583 10.583 0 0 1 3.83-1.601v-2.669h3.706v2.669c1.381.251 2.7.785 3.83 1.601l1.884-1.884 2.607 2.607L8.29-5.683a10.583 10.583 0 0 1 1.601 3.83M0-6.688c-3.705 0-6.688 3.014-6.688 6.688S-3.705 6.688 0 6.688 6.688 3.705 6.688 0 3.705-6.688 0-6.688"
                >
                <animateTransform
                    attributeName="transform"
                    dur="0.2s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0;45"
                />
                </path>
            </g>
            </defs>
            <use href="#a" transform="rotate(-90)" />
            <use href="#b" transform="rotate(180 48 0)" />
            <use href="#c" transform="rotate(180 64 0)" />
            <use href="#d" transform="rotate(90 80 80)" />
            <use href="#e" transform="rotate(90 96 96)" />
            <use href="#f" transform="rotate(90 144 144)" />
            <use href="#g" transform="rotate(90 160 160)" />
            <use href="#f" transform="rotate(-90 208 -208)" />
            <use href="#b" transform="rotate(180 240 0)" />
            <use href="#f" transform="translate(512)" />
            <use href="#f" transform="translate(0 32)" />
            <use href="#h" transform="rotate(-90 48 -16)" />
            <use href="#f" transform="rotate(180 48 16)" />
            <use href="#b" transform="rotate(90 48 80)" />
            <use href="#i" transform="rotate(180 80 16)" />
            <use href="#g" transform="translate(192 32)" />
            <use href="#j" transform="rotate(-90 128 -96)" />
            <use href="#k" transform="rotate(180 128 16)" />
            <use href="#f" transform="rotate(90 144 176)" />
            <use href="#e" transform="rotate(90 160 192)" />
            <use href="#f" transform="rotate(180 208 16)" />
            <use href="#k" transform="translate(448 32)" />
            <use href="#e" transform="rotate(-90 256 -224)" />
            <use href="#b" transform="rotate(90 240 272)" />
            <use href="#f" transform="translate(32 64)" />
            <use href="#e" transform="rotate(-90 64 0)" />
            <use href="#h" transform="rotate(-90 80 -16)" />
            <use href="#f" transform="rotate(180 64 32)" />
            <use href="#f" transform="rotate(180 80 32)" />
            <use href="#i" transform="translate(192 64)" />
            <use href="#l" transform="translate(224 64)" />
            <use href="#l" transform="translate(256 64)" />
            <use href="#a" transform="rotate(-90 176 -112)" />
            <use href="#m" transform="translate(320 64)" />
            <use href="#m" transform="rotate(180 192 32)" />
            <use href="#a" transform="rotate(90 192 256)" />
            <use href="#i" transform="rotate(-90 272 -208)" />
            <use href="#l" transform="translate(512 64)" />
            <use href="#d" transform="translate(0 96)" />
            <use href="#n" transform="translate(32 96)" />
            <use href="#b" transform="rotate(90 0 96)" />
            <use href="#d" transform="rotate(180 64 48)" />
            <use href="#b" transform="rotate(90 32 128)" />
            <use href="#a" transform="translate(192 96)" />
            <use href="#b" transform="translate(256 96)" />
            <use href="#c" transform="translate(288 96)" />
            <use href="#i" transform="rotate(90 112 208)" />
            <use href="#n" transform="translate(352 96)" />
            <use href="#i" transform="rotate(90 144 240)" />
            <use href="#n" transform="translate(416 96)" />
            <use href="#m" transform="rotate(90 176 272)" />
            <use href="#j" transform="rotate(-90 288 -192)" />
            <use href="#e" transform="rotate(-90 64 64)" />
            <use href="#e" transform="rotate(-90 80 48)" />
            <use href="#e" transform="rotate(90 -32 96)" />
            <use href="#k" transform="translate(96 128)" />
            <use href="#j" transform="rotate(90 16 144)" />
            <use href="#i" transform="translate(192 128)" />
            <use href="#b" transform="rotate(180 112 64)" />
            <use href="#f" transform="rotate(90 64 192)" />
            <use href="#o" transform="rotate(90 80 208)" />
            <use href="#a" transform="rotate(90 96 224)" />
            <use href="#a" transform="rotate(180 176 64)" />
            <use href="#b" transform="rotate(-90 256 -128)" />
            <use href="#a" transform="rotate(180 208 64)" />
            <use href="#k" transform="translate(448 128)" />
            <use href="#h" transform="rotate(-90 304 -176)" />
            <use href="#e" transform="translate(512 128)" />
            <use href="#n" transform="rotate(180 0 80)" />
            <use href="#g" transform="rotate(180 16 80)" />
            <use href="#i" transform="translate(64 160)" />
            <use href="#p" transform="rotate(-90 144 16)" />
            <use href="#g" transform="rotate(180 96 80)" />
            <use href="#h" transform="rotate(-90 192 -32)" />
            <use href="#l" transform="rotate(90 48 208)" />
            <use href="#n" transform="rotate(180 144 80)" />
            <use href="#a" transform="translate(320 160)" />
            <use href="#i" transform="translate(352 160)" />
            <use href="#c" transform="translate(416 160)" />
            <use href="#d" transform="rotate(-90 304 -144)" />
            <use href="#f" transform="rotate(-90 336 -176)" />
            <use href="#g" transform="rotate(-90 96 96)" />
            <use href="#d" transform="rotate(90 -64 128)" />
            <use href="#i" transform="translate(96 192)" />
            <use href="#k" transform="rotate(180 64 96)" />
            <use href="#l" transform="rotate(-90 176 16)" />
            <use href="#i" transform="translate(224 192)" />
            <use href="#c" transform="translate(256 192)" />
            <use href="#j" transform="rotate(180 144 96)" />
            <use href="#b" transform="translate(320 192)" />
            <use href="#e" transform="rotate(180 176 96)" />
            <use href="#o" transform="rotate(-90 288 -96)" />
            <use href="#l" transform="translate(416 192)" />
            <use href="#o" transform="translate(448 192)" />
            <use href="#b" transform="rotate(90 144 336)" />
            <use href="#i" transform="rotate(180 256 96)" />
            <use href="#j" transform="rotate(90 -96 128)" />
            <use href="#c" transform="rotate(-90 176 48)" />
            <use href="#n" transform="rotate(-90 192 32)" />
            <use href="#k" transform="translate(192 224)" />
            <use href="#d" transform="translate(256 224)" />
            <use href="#g" transform="rotate(-90 256 -32)" />
            <use href="#b" transform="rotate(90 48 272)" />
            <use href="#n" transform="rotate(90 64 288)" />
            <use href="#g" transform="rotate(90 80 304)" />
            <use href="#i" transform="rotate(90 96 320)" />
            <use href="#h" transform="rotate(90 112 336)" />
            <use href="#k" transform="rotate(90 128 352)" />
            <use href="#j" transform="rotate(180 256 112)" />
            <use href="#g" transform="translate(0 256)" />
            <use href="#n" transform="rotate(-90 176 80)" />
            <use href="#p" transform="rotate(-90 192 64)" />
            <use href="#c" transform="rotate(90 -48 208)" />
            <use href="#m" transform="translate(192 256)" />
            <use href="#m" transform="translate(224 256)" />
            <use href="#a" transform="rotate(90 16 272)" />
            <use href="#e" transform="rotate(90 32 288)" />
            <use href="#e" transform="translate(384 256)" />
            <use href="#e" transform="rotate(-90 336 -80)" />
            <use href="#g" transform="translate(448 256)" />
            <use href="#e" transform="rotate(-90 368 -112)" />
            <use href="#p" transform="rotate(180 256 128)" />
            <use href="#j" transform="rotate(180 32 144)" />
            <use href="#d" transform="rotate(90 -96 192)" />
            <use href="#e" transform="rotate(90 -80 208)" />
            <use href="#d" transform="translate(160 288)" />
            <use href="#k" transform="translate(192 288)" />
            <use href="#k" transform="rotate(90 -32 256)" />
            <use href="#l" transform="rotate(180 128 144)" />
            <use href="#h" transform="rotate(180 144 144)" />
            <use href="#n" transform="rotate(-90 320 -32)" />
            <use href="#l" transform="rotate(90 48 336)" />
            <use href="#g" transform="rotate(-90 352 -64)" />
            <use href="#o" transform="rotate(90 80 368)" />
            <use href="#c" transform="rotate(180 240 144)" />
            <use href="#i" transform="rotate(-90 160 160)" />
            <use href="#e" transform="rotate(180 32 160)" />
            <use href="#n" transform="translate(96 320)" />
            <use href="#n" transform="rotate(-90 224 96)" />
            <use href="#k" transform="rotate(90 -80 240)" />
            <use href="#d" transform="rotate(180 96 160)" />
            <use href="#d" transform="rotate(90 -32 288)" />
            <use href="#l" transform="rotate(90 -16 304)" />
            <use href="#o" transform="rotate(90 32 352)" />
            <use href="#b" transform="translate(416 320)" />
            <use href="#n" transform="translate(480 320)" />
            <use href="#f" transform="translate(512 320)" />
            <use href="#k" transform="rotate(-90 192 160)" />
            <use href="#e" transform="rotate(180 48 176)" />
            <use href="#m" transform="translate(128 352)" />
            <use href="#i" transform="rotate(180 96 176)" />
            <use href="#m" transform="rotate(90 -64 288)" />
            <use href="#j" transform="rotate(-90 304 48)" />
            <use href="#j" transform="rotate(180 144 176)" />
            <use href="#d" transform="rotate(90 -16 336)" />
            <use href="#a" transform="rotate(90 0 352)" />
            <use href="#k" transform="rotate(180 192 176)" />
            <use href="#k" transform="rotate(-90 400 -48)" />
            <use href="#d" transform="rotate(90 64 416)" />
            <use href="#o" transform="rotate(-90 432 -80)" />
        </svg>
      ): null}
    </>
  )
}

export default SVGImage
