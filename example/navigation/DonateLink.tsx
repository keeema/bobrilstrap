import * as b from "bobril";
import { Navbar, textColor } from "../../index";

export function DonateLink(): b.IBobrilNode {
    return (
        <Navbar.Nav.Item>
            <Navbar.Nav.Link href={b.urlOfRoute("donation")}>
                <svg viewBox="0 0 64 64" width="24" height="24" style={textColor("white")}>
                    <g>
                        <g id="caring-people-love-charity-heart_1_">
                            <path
                                fill="currentColor"
                                d="M46.479,35.416l-16.591,9.605l-7.358-2.568l1.82-1.571H31c2.206,0,4-1.794,4-4c0-2.206-1.794-4-4-4h-6.838l-2.846-0.948
			C21.213,31.9,21.107,31.882,21,31.882H8v-0.771c0-0.553-0.447-1.229-1-1.229H0v2h6v1.229v18v0.771H0v2h7c0.553,0,1-0.218,1-0.771
			V52.3l20.18,3.509c0.28,0.049,0.563,0.072,0.847,0.072c1.037,0,2.067-0.323,2.924-0.935l18.483-13.458
			c0.791-0.576,1.308-1.427,1.452-2.396c0.146-0.968-0.098-1.933-0.686-2.715C50.1,34.91,48.07,34.494,46.479,35.416z
			 M49.908,38.798c-0.065,0.435-0.297,0.816-0.652,1.075L30.78,53.326c-0.648,0.464-1.469,0.651-2.258,0.514L8,50.272V33.883h12.838
			l2.846,0.948c0.103,0.034,0.209,0.052,0.316,0.052h7c1.103,0,2,0.897,2,2s-0.897,2-2,2h-7c-0.228,0-0.447,0.077-0.625,0.219
			l-2.226,1.781H16v2h1.838l11.846,4.063c0.271,0.091,0.568,0.118,0.817-0.026l16.98-9.802c0.714-0.411,1.624-0.213,2.119,0.448
			C49.864,37.917,49.974,38.364,49.908,38.798z"
                            />
                            <path
                                fill="currentColor"
                                d="M61.885,10.138c-2.791-2.693-7.332-2.691-10.123,0L51,10.872l-0.762-0.734c-2.791-2.693-7.332-2.693-10.123,0
			C38.751,11.453,38,13.204,38,15.071c0,1.865,0.751,3.616,2.115,4.932l10.19,9.83c0.193,0.187,0.444,0.28,0.694,0.28
			s0.501-0.094,0.694-0.28l10.19-9.83C63.249,18.687,64,16.936,64,15.071C64,13.204,63.249,11.453,61.885,10.138z M60.496,18.563
			L51,27.723l-9.496-9.16C40.534,17.627,40,16.387,40,15.071c0-1.317,0.534-2.558,1.504-3.493c1.013-0.977,2.343-1.466,3.673-1.466
			s2.66,0.489,3.673,1.466l1.456,1.404c0.387,0.373,1.002,0.373,1.389,0l1.456-1.404c2.025-1.953,5.32-1.953,7.346,0
			C61.466,12.513,62,13.753,62,15.071C62,16.387,61.466,17.627,60.496,18.563z"
                            />
                            <path
                                fill="currentColor"
                                d="M35.315,27.548c-1.65-0.192-3.354-0.39-5.08-0.12c-1.545,0.243-3.289,1.125-3.551,2.871l1.979,0.297
			c0.094-0.63,1.042-1.06,1.882-1.191c1.457-0.23,2.953-0.054,4.539,0.13c1.617,0.188,3.287,0.382,4.979,0.136
			c1.259-0.184,2.124-0.68,2.573-1.475l-1.74-0.984c-0.126,0.223-0.524,0.393-1.121,0.48C38.339,27.899,36.871,27.729,35.315,27.548
			z"
                            />
                            <path
                                fill="currentColor"
                                d="M25.31,22.17c1.598,0.048,3.154,0.494,4.803,0.967c0.747,0.214,1.493,0.428,2.246,0.605
			c3.329,0.785,6.014,0.497,7.981-0.855l-1.133-1.648c-1.484,1.021-3.633,1.208-6.39,0.557c-0.722-0.17-1.438-0.376-2.153-0.581
			c-1.694-0.485-3.446-0.988-5.294-1.044c-3.361-0.083-6.704,1.422-8.688,3.974l1.58,1.227C19.861,23.314,22.568,22.076,25.31,22.17
			z"
                            />
                        </g>
                        <g id="Layer_1_1_"></g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
            </Navbar.Nav.Link>
        </Navbar.Nav.Item>
    );
}