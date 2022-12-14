import * as React from "react";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Path,
  Rect,
  Pattern,
  Image,
  Use,
} from "react-native-svg";

interface ISVGProps {
  width?: number;
  height?: number;
  color?: string;
  onPress?: (e: any) => void;
  xmlns?: any;
}

export const ArrowRight = (props: ISVGProps) => {
  const { width, height, onPress, color } = props;

  return (
    <Svg
      width={width || 20}
      height={height || 20}
      onPress={onPress}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.625 10h13.75M11.75 4.375L17.375 10l-5.625 5.625"
        stroke={color || "#fff"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export function CheckedIcon(props: any) {
  return (
    <Svg
      width={110}
      height={110}
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M55 10.313A44.688 44.688 0 1099.688 55 44.74 44.74 0 0055 10.312zm21.283 36.862l-25.21 24.063a3.448 3.448 0 01-4.754 0L33.717 59.206a3.44 3.44 0 014.754-4.975l10.225 9.766L71.53 42.2a3.44 3.44 0 014.753 4.975z"
        fill="#3FAEC7"
      />
    </Svg>
  );
}

export function InstaIcon(props: ISVGProps) {
  const { height, onPress, width } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={102 || width}
      height={102 || height}
      onPress={onPress}
      viewBox="0 0 102 102"
      {...props}
    >
      <Defs>
        <RadialGradient
          id="a"
          cx={6.601}
          cy={99.766}
          r={129.502}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.09} stopColor="#fa8f21" />
          <Stop offset={0.78} stopColor="#d82d7e" />
        </RadialGradient>
        <RadialGradient
          id="b"
          cx={70.652}
          cy={96.49}
          r={113.963}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.64} stopColor="#8c3aaa" stopOpacity={0} />
          <Stop offset={1} stopColor="#8c3aaa" />
        </RadialGradient>
      </Defs>
      <Path
        fill="url(#a)"
        d="M25.865 101.639A34.341 34.341 0 0114.312 99.5a19.329 19.329 0 01-7.154-4.653A19.181 19.181 0 012.5 87.694 34.341 34.341 0 01.364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 012.5 14.312a19.4 19.4 0 014.654-7.158A19.206 19.206 0 0114.309 2.5 34.341 34.341 0 0125.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0187.691 2.5a19.254 19.254 0 017.154 4.653 19.267 19.267 0 014.655 7.156 34.341 34.341 0 012.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 01-2.14 11.552A20.6 20.6 0 0187.691 99.5a34.342 34.342 0 01-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
        data-name="Path 16"
      />
      <Path
        fill="url(#b)"
        d="M25.865 101.639A34.341 34.341 0 0114.312 99.5a19.329 19.329 0 01-7.154-4.653A19.181 19.181 0 012.5 87.694 34.341 34.341 0 01.364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 012.5 14.312a19.4 19.4 0 014.654-7.158A19.206 19.206 0 0114.309 2.5 34.341 34.341 0 0125.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0187.691 2.5a19.254 19.254 0 017.154 4.653 19.267 19.267 0 014.655 7.156 34.341 34.341 0 012.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 01-2.14 11.552A20.6 20.6 0 0187.691 99.5a34.342 34.342 0 01-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
        data-name="Path 17"
      />
      <Path
        fill="#fff"
        d="M38.477 51.217a12.631 12.631 0 1112.629 12.632 12.631 12.631 0 01-12.629-12.632m-6.829 0a19.458 19.458 0 1019.458-19.458 19.457 19.457 0 00-19.458 19.458m35.139-20.229a4.547 4.547 0 104.549-4.545 4.549 4.549 0 00-4.547 4.545m-30.99 51.074a20.943 20.943 0 01-7.037-1.3 12.547 12.547 0 01-7.193-7.19 20.923 20.923 0 01-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082 21.082 0 011.3-7.037 12.54 12.54 0 017.193-7.193 20.924 20.924 0 017.037-1.3c3.994-.184 5.194-.22 15.309-.22s11.316.039 15.314.221a21.082 21.082 0 017.037 1.3 12.541 12.541 0 017.193 7.193 20.926 20.926 0 011.3 7.037c.184 4 .22 5.194.22 15.314s-.037 11.316-.22 15.314a21.023 21.023 0 01-1.3 7.037 12.547 12.547 0 01-7.193 7.19 20.925 20.925 0 01-7.037 1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786 27.786 0 00-9.2 1.76 19.373 19.373 0 00-11.083 11.083 27.794 27.794 0 00-1.76 9.2c-.187 4.04-.229 5.332-.229 15.623s.043 11.582.229 15.623a27.793 27.793 0 001.76 9.2 19.374 19.374 0 0011.083 11.083 27.813 27.813 0 009.2 1.76c4.042.184 5.332.229 15.623.229s11.582-.043 15.623-.229a27.8 27.8 0 009.2-1.76 19.374 19.374 0 0011.083-11.083 27.716 27.716 0 001.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786 27.786 0 00-1.76-9.2 19.379 19.379 0 00-11.08-11.083 27.748 27.748 0 00-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
        data-name="Path 18"
      />
    </Svg>
  );
}

export function DefaultImage(props: ISVGProps) {
  const { color, height, onPress, width } = props;
  return (
    <Svg
      width={width || 120}
      height={height || 120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect width={120} height={120} rx={60} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_121_547"
            transform="matrix(.00195 0 0 .00195 -.5 0)"
          />
        </Pattern>
        <Image
          id="image0_121_547"
          width={1024}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}
export function CoinIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 32}
      onPress={onPress}
      height={32 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 19c7.18 0 13-2.686 13-6s-5.82-6-13-6S3 9.686 3 13s5.82 6 13 6zM16 19v6"
        stroke={color || "#FEA827"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 13v6c0 3 5 6 13 6s13-3 13-6v-6M24 17.763v6M8 17.763v6"
        stroke={color || "#FEA827"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TwitterIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 32}
      onPress={onPress}
      height={32 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26.23 12.77l-.258.259-.032.363C25.232 21.61 18.298 28 10 28c-1.723 0-3.05-.275-4-.75h0c-.75-.375-.997-.745-1-.75h.002c.05-.02 3.203-1.221 5.283-3.575l.736-.832-.905-.645a12.7 12.7 0 01-2.865-2.822H7.25C5.678 16.49 3.959 12.727 5 7h0l-.298-.954L5 7h0l.001.001c.055.055 4.38 4.333 9.746 5.731l1.251.326.001-1.293.001-.761A5.04 5.04 0 0121.066 6a5.015 5.015 0 014.266 2.5l.289.5H30l-3.77 3.77zM5 7h0z"
        stroke={color || "#406FF1"}
        strokeWidth={2}
      />
    </Svg>
  );
}

export function FacebookIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 32}
      onPress={onPress}
      height={32 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
        stroke={color || "#642AE3"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 11h-2a3 3 0 00-3 3v14M12 18h8"
        stroke={color || "#642AE3"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HomeIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 36}
      onPress={onPress}
      height={36 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M30.007 15.415L18.756 5.187a1.125 1.125 0 00-1.514 0L5.993 15.415a1.125 1.125 0 00-.368.832V29.25a1.125 1.125 0 001.125 1.125h22.5a1.125 1.125 0 001.125-1.125V16.247a1.126 1.126 0 00-.368-.832z"
        stroke={color || "#C6CBCC"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ComunityIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 36}
      onPress={onPress}
      height={36 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.625 6.75h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125zM14.625 20.25h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125zM28.125 6.75h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125z"
        stroke={color || "#C6CBCC"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function UserIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 36}
      onPress={onPress}
      height={36 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 22.5a9 9 0 100-18 9 9 0 000 18z"
        stroke={color || "#C6CBCC"}
        strokeWidth={2.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M4.358 30.374a15.755 15.755 0 0127.284 0"
        stroke={color || "#C6CBCC"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MinCoinIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 21}
      onPress={onPress}
      height={21 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 9.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        fill={color || "#F6F5E8"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 12.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MediumCoinIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 31}
      onPress={onPress}
      height={29 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 9.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        fill={color || "#F6F5E8"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 12.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M8.5 13.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 16.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M13.5 17.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 20.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MaxCoinIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 42}
      onPress={onPress}
      height={33 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M3.5 17.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 20.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M8.5 21.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 24.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 15.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        fill="#F6F5E8"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 18.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 9.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        fill="#F6F5E8"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 12.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5 21.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
        fill="#F6F5E8"
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.5 24.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
        fill={color || "#FEA827"}
        stroke="#191B1D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function RulesIcon(props: ISVGProps) {
  const { color, height, width, onPress } = props;

  return (
    <Svg
      width={width || 32}
      onPress={onPress}
      height={32 || height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
        stroke={color || "#191B1D"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15h1v7h1"
        stroke={color || "#191B1D"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M15.75 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#191B1D" />
    </Svg>
  );
}
