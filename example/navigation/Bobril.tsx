import * as b from "bobril";
import { Navbar } from "../../index";

export function BobrilLink(): b.IBobrilNode {
    return (
        <Navbar.Nav.Item>
            <Navbar.Nav.Link href="https://bobril.com" target="_blank">
                <svg
                    version="1.2"
                    baseProfile="tiny"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 262 240"
                    overflow="visible"
                >
                    <g id="bg">
                        <path
                            fill="#FFFFFF"
                            d="M210.541,87.315c-4.927-1.754-10.239-3.317-15.844-4.696c1.608-5.544,2.911-10.926,3.854-16.069
		c4.352-23.705,0.781-40.205-10.052-46.459c-10.834-6.255-26.907-1.095-45.261,14.524c-3.983,3.389-7.992,7.208-11.989,11.373
		c-3.997-4.164-8.006-7.983-11.989-11.373C100.908,18.994,84.833,13.835,74,20.09c-10.833,6.254-14.403,22.754-10.052,46.459
		c0.944,5.144,2.247,10.526,3.855,16.069c-5.605,1.379-10.917,2.942-15.844,4.696C29.254,95.399,16.75,106.741,16.75,119.25
		c0,12.509,12.504,23.851,35.208,31.936c4.927,1.754,10.239,3.317,15.844,4.696c-1.608,5.544-2.911,10.926-3.855,16.07
		C59.597,195.656,63.167,212.155,74,218.41c3.004,1.734,6.408,2.591,10.155,2.591c9.765-0.001,21.841-5.825,35.106-17.115
		c3.982-3.389,7.992-7.208,11.989-11.373c3.997,4.164,8.007,7.983,11.989,11.373c13.266,11.291,25.34,17.115,35.105,17.115
		c3.746,0,7.152-0.857,10.155-2.591c10.833-6.255,14.403-22.754,10.052-46.459c-0.944-5.144-2.246-10.526-3.854-16.07
		c5.605-1.379,10.917-2.942,15.844-4.696c22.705-8.085,35.209-19.427,35.209-31.936C245.75,106.741,233.246,95.399,210.541,87.315z
		 M149.072,41.468C160.5,31.742,170.891,26.5,178.289,26.5c2.18,0,4.101,0.455,5.711,1.385c7.076,4.086,9.207,17.933,5.7,37.041
		c-0.923,5.026-2.205,10.297-3.801,15.738c-9.396-1.88-19.481-3.259-30.004-4.101c-5.991-8.693-12.227-16.737-18.553-23.934
		C141.257,48.526,145.181,44.78,149.072,41.468z M161.272,136.584c-3.334,5.774-6.808,11.349-10.375,16.697
		c-6.415,0.415-12.98,0.637-19.647,0.637c-6.782,0-13.339-0.218-19.641-0.626c-3.57-5.351-7.047-10.929-10.383-16.708
		c-3.334-5.774-6.424-11.571-9.272-17.334c2.848-5.763,5.938-11.56,9.272-17.334s6.808-11.349,10.376-16.697
		c6.415-0.415,12.98-0.637,19.648-0.637c6.782,0,13.339,0.218,19.64,0.626c3.57,5.351,7.047,10.929,10.382,16.708
		c3.334,5.774,6.424,11.571,9.272,17.334C167.697,125.013,164.606,130.81,161.272,136.584z M175.393,129.563
		c2.969,6.678,5.563,13.257,7.759,19.653c-6.637,1.296-13.632,2.339-20.899,3.107c2.323-3.663,4.602-7.406,6.815-11.239
		C171.28,137.251,173.382,133.406,175.393,129.563z M144.391,162.635c-4.299,5.91-8.699,11.446-13.141,16.546
		c-4.441-5.1-8.842-10.636-13.141-16.546c4.334,0.18,8.715,0.283,13.141,0.283C135.676,162.918,140.057,162.815,144.391,162.635z
		 M100.247,152.321c-7.408-0.787-14.395-1.842-20.894-3.118c2.195-6.392,4.788-12.967,7.755-19.641
		c2.011,3.843,4.113,7.689,6.326,11.522C95.645,144.916,97.924,148.659,100.247,152.321z M87.107,108.938
		c-2.969-6.678-5.563-13.257-7.759-19.653c6.637-1.296,13.632-2.339,20.9-3.107c-2.323,3.663-4.602,7.406-6.815,11.239
		C91.22,101.249,89.118,105.095,87.107,108.938z M118.109,75.865c4.299-5.91,8.7-11.446,13.141-16.546
		c4.441,5.1,8.842,10.636,13.141,16.546c-4.333-0.18-8.715-0.283-13.141-0.283C126.824,75.582,122.443,75.685,118.109,75.865z
		 M169.067,97.416c-2.213-3.832-4.492-7.575-6.814-11.237c7.408,0.787,14.394,1.842,20.894,3.118
		c-2.195,6.392-4.788,12.967-7.755,19.64C173.382,105.094,171.28,101.249,169.067,97.416z M72.8,64.925
		c-3.507-19.108-1.376-32.955,5.7-37.041c1.611-0.93,3.531-1.385,5.711-1.385c7.399,0,17.79,5.243,29.217,14.968
		c3.892,3.312,7.815,7.058,11.73,11.161c-6.326,7.197-12.563,15.241-18.553,23.934c-10.524,0.842-20.609,2.221-30.004,4.101
		C75.005,75.222,73.722,69.951,72.8,64.925z M25.75,119.25c0-8.171,10.926-16.94,29.228-23.457c4.814-1.714,10.02-3.239,15.53-4.578
		c3.07,9.077,6.918,18.5,11.451,28.035c-4.529,9.527-8.375,18.944-11.444,28.014C42.662,140.47,25.75,129.494,25.75,119.25z
		 M113.428,197.032C98.633,209.624,85.575,214.7,78.5,210.615c-7.077-4.085-9.208-17.932-5.7-37.04
		c0.923-5.026,2.205-10.297,3.8-15.738c9.396,1.88,19.481,3.259,30.004,4.101c5.991,8.693,12.227,16.737,18.554,23.934
		C121.243,189.974,117.319,193.72,113.428,197.032z M189.7,173.575c3.507,19.108,1.376,32.955-5.7,37.04
		c-7.077,4.089-20.135-0.992-34.928-13.583c-3.891-3.312-7.815-7.058-11.73-11.16c6.326-7.197,12.563-15.241,18.554-23.934
		c10.523-0.842,20.608-2.221,30.004-4.101C187.495,163.278,188.778,168.549,189.7,173.575z M207.522,142.707
		c-4.814,1.714-10.02,3.239-15.53,4.578c-3.07-9.077-6.918-18.501-11.451-28.035c4.529-9.527,8.376-18.944,11.444-28.014
		c27.853,6.794,44.765,17.77,44.765,28.014C236.75,127.421,225.823,136.19,207.522,142.707z"
                        />
                    </g>
                    <g id="nody">
                        <path
                            fill="#4F4F4F"
                            d="M94.695,108.062c0,0-13.238-21.06-31.29-21.361c-18.052-0.301-24.972,16.848-24.37,26.175
		c0.602,9.327,5.716,24.671,26.175,34.9c20.459,10.229,42.722,13.238,42.722,13.238L94.695,108.062z"
                        />
                        <path
                            fill="#4F4F4F"
                            d="M149.151,156.801c0,0-2.708,8.424-2.708,13.238c0,4.814,1.504,9.026,1.504,9.026l4.513-5.716l3.911,4.814
		l-0.602-6.017L166,173.048c0,0-7.822-6.619-9.628-10.53c-1.805-3.911-2.106-7.221-2.106-7.221L149.151,156.801z"
                        />
                        <path
                            fill="#4F4F4F"
                            d="M112.965,156.801c0,0,2.791,8.424,2.791,13.238c0,4.814-1.551,9.026-1.551,9.026l-4.652-5.716l-4.032,4.814
		l0.62-6.017l-10.544,0.903c0,0,8.063-6.619,9.924-10.53c1.861-3.911,2.171-7.221,2.171-7.221L112.965,156.801z"
                        />
                        <path
                            fill="#8C8C8C"
                            d="M196.552,136.083c-2.166-7.218-13.994-11.952-15.335-12.468l-1.727-0.664
		c0.079-1.025,0.097-2.011,0.041-2.944c-0.863-14.388-4.398-33.962-16.182-46.978c2.075-1.163,4.323-2.758,5.688-4.729
		c1.587-2.293,1.881-5.191,0.784-7.752c-1.173-2.743-3.688-4.606-6.897-5.113c-8.502-1.342-10.335,3.119-10.731,5.098
		c-0.188,0.937-0.433,2.192-0.682,3.479c-4.631-2.291-9.806-3.695-15.424-4.185c-0.938-2.234-2.12-4.237-3.523-5.964
		c-4.451-5.479-10.286-4.184-10.533-4.125l-4.497,1.059l4.262,1.786c1.25,0.523,3.307,1.711,3.749,2.596
		c0.052,0.104,0.101,0.215,0.146,0.333c-0.954-0.498-2.119-0.888-3.503-0.995c-4.478-0.345-6.658,1.705-6.893,1.939l-2.555,2.556
		l3.615,0.004c1.563,0.002,4.207,0.298,5.187,0.952c0.099,0.065,0.237,0.174,0.42,0.353c-4.512,0.693-8.697,1.913-12.493,3.64
		c-0.247-1.27-0.489-2.505-0.675-3.43c-0.397-1.979-2.243-6.439-10.764-5.098c-3.228,0.508-5.752,2.376-6.927,5.126
		c-1.093,2.559-0.796,5.454,0.794,7.742c1.091,1.57,2.83,3.056,5.182,4.431c-13.023,13.567-15.017,34.211-15.017,45.559
		c0,2.678,0.249,5.396,0.682,8.107l-0.674-1.01l-1.759,0.143c-0.528,0.043-12.979,1.169-17.553,11.726
		c-4.612,10.644,2.593,19.062,2.902,19.415l4.113,4.701l1.098-6.149l0.32-1.794c2.468,2.001,5.98,2.391,6.706,2.452l5.096,0.425
		l-2.116-4.656l-1.23-2.705c3.205-0.284,5.819-2.742,6.336-3.259l1.797-1.797c4.808,12.025,10.964,21.25,11.386,21.876l0.446,0.661
		h61.191l0.442-0.694c0.515-0.81,8.642-13.666,13.896-26.743l2.434,2.102c-1.357,1.442-1.782,2.784-1.365,4.162
		c0.179,0.59,0.99,2.516,3.926,2.516c0.155,0,0.308-0.003,0.46-0.008l-0.799,1.817l-2.466,5.603l5.939-1.485
		c0.427-0.107,3.965-1.044,6.365-3.335l0.674,1.594l3.209,7.584l2.422-7.87C196.054,151.312,198.596,142.895,196.552,136.083z
		 M84.493,140.63l-2.664-0.571l3.463-3.105c0.445,1.408,0.922,2.793,1.421,4.152L84.493,140.63z M182.246,141.157l-5.963-5.15
		c0,0,0,0,0,0L182.246,141.157L182.246,141.157z M187.962,147.776c-0.141,0.165-0.293,0.322-0.454,0.472
		c-0.321,0.3-0.676,0.571-1.044,0.815c0.368-0.243,0.723-0.515,1.044-0.815C187.669,148.097,187.821,147.94,187.962,147.776
		c0.339-0.395,0.613-0.811,0.837-1.226C188.576,146.965,188.301,147.381,187.962,147.776z M189.768,142.962c0,0,0,0.017-0.001,0.048
		C189.768,142.978,189.768,142.962,189.768,142.962l3.31,7.822L189.768,142.962z"
                        />
                        <path
                            fill="#4F4F4F"
                            d="M147.346,100.992l12.486-10.229c0,0,1.789,1.205,1.956,2.557c0.301,2.445-0.15,3.761-0.15,3.761
		s-2.621,1.106-6.262,2.407C151.735,100.788,147.346,100.992,147.346,100.992z"
                        />
                        <path
                            fill="#4F4F4F"
                            d="M114.627,100.992l-12.696-10.229c0,0-1.819,1.205-1.988,2.557c-0.306,2.445,0.153,3.761,0.153,3.761
		s2.665,1.106,6.367,2.407C110.165,100.788,114.627,100.992,114.627,100.992z"
                        />
                        <path
                            fill="#FFFFFF"
                            d="M105.204,99.038c0.404,0.146,0.824,0.296,1.259,0.449c3.702,1.301,8.164,1.504,8.164,1.504l-7.49-6.035
		C106.196,96.124,105.518,97.514,105.204,99.038z"
                        />
                        <path
                            fill="#FFFFFF"
                            d="M155.375,99.487c0.408-0.146,0.8-0.288,1.18-0.428c-0.308-1.512-0.976-2.891-1.902-4.054l-7.307,5.986
		C147.346,100.992,151.735,100.788,155.375,99.487z"
                        />
                        <path
                            fill="#F2F2F3"
                            d="M155.62,69.152c0,0-0.756-7.255,2.267-8.313c3.023-1.058,5.139-1.663,6.348-0.302s1.058,4.837-1.511,5.744
		c-2.569,0.907-5.441,3.174-5.441,3.174L155.62,69.152z"
                        />
                        <path
                            fill="#F2F2F3"
                            d="M105.354,69.152c0,0,0.795-7.255-2.384-8.313c-3.179-1.058-5.404-1.663-6.675-0.302
		c-1.271,1.36-1.112,4.837,1.589,5.744c2.702,0.907,5.721,3.174,5.721,3.174L105.354,69.152z"
                        />
                        <path
                            fill="#9E9E9E"
                            d="M175.176,120.924c0,0,3.385-0.226,6.995,2.482c3.61,2.708,5.867,5.416,5.867,5.416l-11.959,11.959
		l-8.123-6.544L175.176,120.924z"
                        />
                        <path
                            fill="#686868"
                            d="M175.374,120.919c0.773,0,3.702,0.166,6.797,2.487c3.61,2.708,5.867,5.416,5.867,5.416l-11.959,11.959
		l-8.123-6.544l7.221-13.313C175.176,120.924,175.245,120.919,175.374,120.919 M175.374,117.919L175.374,117.919
		c-0.259,0-0.397,0.011-0.397,0.011l-1.62,0.131l-0.818,1.432l-7.221,13.313l-1.192,2.198l1.947,1.569l8.123,6.544l2.098,1.69
		l1.905-1.905l11.959-11.959l1.937-1.937l-1.754-2.105c-0.101-0.122-2.525-3.01-6.372-5.895
		C180.152,118.142,176.425,117.919,175.374,117.919L175.374,117.919z"
                        />
                        <path
                            fill="#9E9E9E"
                            d="M84.888,122.924c0,0-3.233-0.226-6.681,2.482c-3.448,2.708-5.603,5.416-5.603,5.416l11.422,11.959
		l7.758-6.544L84.888,122.924z"
                        />
                        <path
                            fill="#686868"
                            d="M84.699,122.919c0.123,0,0.189,0.005,0.189,0.005l6.896,13.313l-7.758,6.544l-11.422-11.959
		c0,0,2.155-2.708,5.603-5.416C81.163,123.085,83.96,122.919,84.699,122.919 M84.699,119.919c-1.312,0-4.75,0.305-8.344,3.127
		c-3.682,2.891-6.001,5.785-6.098,5.907l-1.63,2.048l1.807,1.893l11.422,11.959l1.948,2.04l2.156-1.818l7.758-6.544l1.832-1.545
		l-1.102-2.128l-6.896-13.313l-0.76-1.468l-1.694-0.145C85.097,119.931,84.958,119.919,84.699,119.919L84.699,119.919z"
                        />
                        <path
                            fill="#9E9E9E"
                            d="M178.335,117.765c-4.4-4.4-13.313-4.739-32.274-4.288c0,5.191-9.163,7.447-14.66,7.447
		c-5.907,0-15.344-2.708-15.344-9.257c-25.668-0.814-27.158,1.289-32.493,6.624c0,21.662,16.848,46.634,16.848,46.634h59.571
		C159.982,164.925,179.237,132.808,178.335,117.765z"
                        />
                        <path
                            fill="#686868"
                            d="M106.71,111.498c2.701,0,5.793,0.057,9.346,0.169c0,6.549,9.437,9.257,15.344,9.257
		c5.497,0,14.66-2.256,14.66-7.447c3.818-0.091,7.227-0.149,10.276-0.149c12.091,0,18.485,0.924,21.999,4.438
		c0.903,15.043-18.353,47.16-18.353,47.16h-59.571c0,0-16.848-24.972-16.848-46.634C88.16,113.695,89.9,111.498,106.71,111.498
		 M106.71,109.498c-16.542,0-19.224,2.028-24.208,7.026l-0.353,0.354l-0.586,0.586v0.828c0,22.02,16.488,46.712,17.19,47.752
		l0.595,0.881h1.063h59.571h1.133l0.583-0.972c0.799-1.333,19.563-32.826,18.634-48.308l-0.045-0.758l-0.537-0.537
		c-4.223-4.223-11.486-5.023-23.413-5.023c-2.773,0-5.957,0.046-10.323,0.15l-1.953,0.046v1.953c0,3.325-7.498,5.447-12.66,5.447
		c-4.653,0-13.344-2.129-13.344-7.257v-1.938l-1.937-0.061C112.502,109.553,109.424,109.498,106.71,109.498L106.71,109.498z"
                        />
                        <path
                            fill="#686868"
                            d="M174.726,135.388c-0.066,0-0.135-0.007-0.203-0.021c-0.196-0.04-19.896-4.042-43.874-4.042
		c-34.231,0-43.155,3.498-43.241,3.534c-0.509,0.208-1.094-0.032-1.305-0.541c-0.211-0.508,0.026-1.091,0.533-1.305
		c0.358-0.15,9.161-3.688,44.013-3.688c24.192,0,44.08,4.042,44.278,4.083c0.541,0.111,0.889,0.641,0.777,1.182
		C175.606,135.062,175.19,135.388,174.726,135.388z"
                        />
                        <path
                            fill="#686868"
                            d="M85.19,126.687c-0.378,0-0.741-0.215-0.909-0.581c-0.231-0.5-0.015-1.093,0.485-1.325
		c0.433-0.202,11.011-4.932,45.882-4.932c24.197,0,46.034,4.689,46.252,4.737c0.539,0.117,0.882,0.65,0.765,1.19
		c-0.118,0.539-0.646,0.882-1.19,0.765c-0.216-0.047-21.852-4.691-45.826-4.691c-34.273,0-44.938,4.699-45.042,4.747
		C85.471,126.657,85.33,126.687,85.19,126.687z"
                        />
                        <path
                            fill="#686868"
                            d="M170.363,143.661c-0.058,0-0.116-0.005-0.175-0.016c-0.152-0.026-15.553-2.692-39.54-2.692
		c-33.985,0-40.262,2.515-40.512,2.622c-0.5,0.214-1.09-0.011-1.313-0.511c-0.222-0.5-0.008-1.082,0.489-1.312
		c0.248-0.114,6.467-2.8,41.336-2.8c24.178,0,39.733,2.696,39.888,2.724c0.544,0.096,0.907,0.614,0.811,1.158
		C171.262,143.32,170.84,143.661,170.363,143.661z"
                        />
                        <path
                            fill="#686868"
                            d="M167.655,153.138c-0.065,0-0.132-0.006-0.199-0.02c-0.126-0.025-12.844-2.537-36.808-2.537
		c-31.531,0-35.969,1.586-36.337,1.747c-0.385,0.259-0.909,0.226-1.255-0.107c-0.397-0.384-0.41-1.017-0.026-1.414
		c1.361-1.414,15.073-2.226,37.619-2.226c24.19,0,37.077,2.551,37.204,2.576c0.541,0.109,0.892,0.638,0.782,1.179
		C168.538,152.811,168.121,153.138,167.655,153.138z M94.465,152.199C94.465,152.199,94.465,152.199,94.465,152.199
		S94.465,152.199,94.465,152.199z M94.468,152.196c0,0-0.001,0.001-0.001,0.002C94.467,152.197,94.467,152.196,94.468,152.196z
		 M94.47,152.193c0,0.001-0.001,0.002-0.002,0.003C94.469,152.195,94.47,152.194,94.47,152.193z"
                        />
                        <path
                            fill="#686868"
                            d="M163.143,160.659c-0.049,0-0.098-0.004-0.147-0.011c-0.081-0.012-8.381-1.192-32.347-1.192
		c-26,0-31.118,0.377-32.119,0.518c-0.229,0.144-0.518,0.195-0.797,0.114c-0.482-0.134-0.825-0.632-0.757-1.127
		c0.133-0.976,0.513-1.057,5.799-1.232c5.443-0.181,14.821-0.272,27.875-0.272c24.166,0,32.305,1.164,32.64,1.214
		c0.546,0.081,0.923,0.589,0.843,1.136C164.058,160.302,163.63,160.659,163.143,160.659z"
                        />
                        <polygon
                            fill="#FFFFFF"
                            points="123.501,111.375 126.751,127.623 131.3,127.623 131.3,119.499 132,119.499 132,127.623 
		136.499,127.623 139.749,111.375 	"
                        />
                        <ellipse fill="#4F4F4F" cx="131.625" cy="106.357" rx="13.625" ry="8.415" />
                    </g>
                </svg>
            </Navbar.Nav.Link>
        </Navbar.Nav.Item>
    );
}