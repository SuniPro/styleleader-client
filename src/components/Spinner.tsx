export function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="200"
      height="200"
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "rgba(0, 0, 0, 0)",
      }}
    >
      <g>
        <rect fill="#ffe9a6" height="20" width="20" y="19" x="19">
          <animate
            calcMode="discrete"
            begin="0s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="19" x="40">
          <animate
            calcMode="discrete"
            begin="0.125s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="19" x="61">
          <animate
            calcMode="discrete"
            begin="0.25s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="40" x="19">
          <animate
            calcMode="discrete"
            begin="0.875s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="40" x="61">
          <animate
            calcMode="discrete"
            begin="0.375s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="61" x="19">
          <animate
            calcMode="discrete"
            begin="0.75s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="61" x="40">
          <animate
            calcMode="discrete"
            begin="0.625s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <rect fill="#ffe9a6" height="20" width="20" y="61" x="61">
          <animate
            calcMode="discrete"
            begin="0.5s"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.125;1"
            values="#d7bc6a;#ffe9a6;#ffe9a6"
            attributeName="fill"
          ></animate>
        </rect>
        <g></g>
      </g>
    </svg>
  );
}
