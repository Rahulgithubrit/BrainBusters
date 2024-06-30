import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Heading = (props) => (
    <Svg
        width={328}
        height={120}
        viewBox="0 0 328 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_dd_45_20)">
            <Path
                d="M28.605 21.525L34.975 3.5H38.3L28.675 29.225L21.325 10.185L13.975 29.225L4.35 3.5H7.675L14.185 21.525L21.325 2.275L28.605 21.525ZM44.7105 28.35C43.2171 28.35 41.8871 28 40.7205 27.3C39.5771 26.5767 38.6788 25.585 38.0255 24.325C37.3955 23.065 37.0805 21.6067 37.0805 19.95C37.0805 18.27 37.4071 16.8 38.0605 15.54C38.7371 14.28 39.6705 13.3 40.8605 12.6C42.0738 11.9 43.4738 11.55 45.0605 11.55C46.6471 11.55 48.0005 11.8883 49.1205 12.565C50.2638 13.2183 51.1388 14.1633 51.7455 15.4C52.3521 16.6367 52.6555 18.1067 52.6555 19.81C52.6555 19.9733 52.6438 20.1483 52.6205 20.335C52.6205 20.4983 52.6205 20.6033 52.6205 20.65H38.8655V18.27H50.4155L49.2955 19.88C49.3655 19.7633 49.4355 19.5883 49.5055 19.355C49.5755 19.0983 49.6105 18.8883 49.6105 18.725C49.6105 17.7683 49.4121 16.94 49.0155 16.24C48.6421 15.54 48.1171 14.9917 47.4405 14.595C46.7638 14.1983 45.9705 14 45.0605 14C43.9871 14 43.0655 14.2333 42.2955 14.7C41.5488 15.1433 40.9655 15.7967 40.5455 16.66C40.1488 17.5 39.9388 18.5383 39.9155 19.775C39.9155 21.035 40.1138 22.1083 40.5105 22.995C40.9071 23.8817 41.4905 24.5583 42.2605 25.025C43.0305 25.4917 43.9638 25.725 45.0605 25.725C46.1571 25.725 47.1255 25.4917 47.9655 25.025C48.8055 24.535 49.5171 23.8 50.1005 22.82L52.3755 24.255C51.5355 25.6083 50.4738 26.635 49.1905 27.335C47.9305 28.0117 46.4371 28.35 44.7105 28.35ZM56.4932 0.699999H59.2932V28H56.4932V0.699999ZM65.8196 19.95C65.8196 21.07 66.0529 22.0617 66.5196 22.925C67.0096 23.7883 67.6629 24.4767 68.4796 24.99C69.3196 25.48 70.2646 25.725 71.3146 25.725C72.1779 25.725 72.9829 25.5967 73.7296 25.34C74.4996 25.06 75.1646 24.6983 75.7246 24.255C76.2846 23.7883 76.6812 23.2983 76.9146 22.785V26.285C76.3546 26.9383 75.5496 27.4517 74.4996 27.825C73.4729 28.175 72.4112 28.35 71.3146 28.35C69.7512 28.35 68.3396 27.9883 67.0796 27.265C65.8196 26.5417 64.8162 25.55 64.0696 24.29C63.3462 23.0067 62.9846 21.56 62.9846 19.95C62.9846 18.3167 63.3462 16.87 64.0696 15.61C64.8162 14.35 65.8196 13.3583 67.0796 12.635C68.3396 11.9117 69.7512 11.55 71.3146 11.55C72.4112 11.55 73.4729 11.7367 74.4996 12.11C75.5496 12.46 76.3546 12.9617 76.9146 13.615V17.115C76.6812 16.5783 76.2846 16.0883 75.7246 15.645C75.1646 15.2017 74.4996 14.8517 73.7296 14.595C72.9829 14.315 72.1779 14.175 71.3146 14.175C70.2646 14.175 69.3196 14.42 68.4796 14.91C67.6629 15.4 67.0096 16.0883 66.5196 16.975C66.0529 17.8383 65.8196 18.83 65.8196 19.95ZM79.8734 19.95C79.8734 18.3167 80.2351 16.87 80.9584 15.61C81.7051 14.35 82.7084 13.3583 83.9684 12.635C85.2284 11.9117 86.6401 11.55 88.2034 11.55C89.7901 11.55 91.2018 11.9117 92.4384 12.635C93.6984 13.3583 94.6901 14.35 95.4134 15.61C96.1601 16.87 96.5334 18.3167 96.5334 19.95C96.5334 21.56 96.1601 23.0067 95.4134 24.29C94.6901 25.55 93.6984 26.5417 92.4384 27.265C91.2018 27.9883 89.7901 28.35 88.2034 28.35C86.6401 28.35 85.2284 27.9883 83.9684 27.265C82.7084 26.5417 81.7051 25.55 80.9584 24.29C80.2351 23.0067 79.8734 21.56 79.8734 19.95ZM82.7084 19.95C82.7084 21.07 82.9418 22.0617 83.4084 22.925C83.8984 23.7883 84.5518 24.4767 85.3684 24.99C86.2084 25.48 87.1534 25.725 88.2034 25.725C89.2534 25.725 90.1868 25.48 91.0034 24.99C91.8434 24.4767 92.4968 23.7883 92.9634 22.925C93.4534 22.0617 93.6984 21.07 93.6984 19.95C93.6984 18.83 93.4534 17.8383 92.9634 16.975C92.4968 16.0883 91.8434 15.4 91.0034 14.91C90.1868 14.42 89.2534 14.175 88.2034 14.175C87.1534 14.175 86.2084 14.42 85.3684 14.91C84.5518 15.4 83.8984 16.0883 83.4084 16.975C82.9418 17.8383 82.7084 18.83 82.7084 19.95ZM122.43 17.85V28H119.63V18.2C119.63 16.8233 119.373 15.8083 118.86 15.155C118.37 14.5017 117.6 14.175 116.55 14.175C115.78 14.175 115.115 14.3383 114.555 14.665C113.995 14.9683 113.563 15.4233 113.26 16.03C112.957 16.6367 112.805 17.36 112.805 18.2V28H110.005V18.2C110.005 16.8233 109.748 15.8083 109.235 15.155C108.745 14.5017 107.975 14.175 106.925 14.175C106.155 14.175 105.49 14.3383 104.93 14.665C104.37 14.9683 103.938 15.4233 103.635 16.03C103.332 16.6367 103.18 17.36 103.18 18.2V28H100.38V11.9H103.18V14.245C103.67 13.335 104.277 12.6583 105 12.215C105.747 11.7717 106.622 11.55 107.625 11.55C108.745 11.55 109.702 11.8183 110.495 12.355C111.312 12.8683 111.907 13.6033 112.28 14.56C112.84 13.5567 113.54 12.81 114.38 12.32C115.22 11.8067 116.177 11.55 117.25 11.55C118.347 11.55 119.28 11.795 120.05 12.285C120.82 12.775 121.403 13.4983 121.8 14.455C122.22 15.3883 122.43 16.52 122.43 17.85ZM133.919 28.35C132.426 28.35 131.096 28 129.929 27.3C128.786 26.5767 127.888 25.585 127.234 24.325C126.604 23.065 126.289 21.6067 126.289 19.95C126.289 18.27 126.616 16.8 127.269 15.54C127.946 14.28 128.879 13.3 130.069 12.6C131.283 11.9 132.683 11.55 134.269 11.55C135.856 11.55 137.209 11.8883 138.329 12.565C139.473 13.2183 140.348 14.1633 140.954 15.4C141.561 16.6367 141.864 18.1067 141.864 19.81C141.864 19.9733 141.853 20.1483 141.829 20.335C141.829 20.4983 141.829 20.6033 141.829 20.65H128.074V18.27H139.624L138.504 19.88C138.574 19.7633 138.644 19.5883 138.714 19.355C138.784 19.0983 138.819 18.8883 138.819 18.725C138.819 17.7683 138.621 16.94 138.224 16.24C137.851 15.54 137.326 14.9917 136.649 14.595C135.973 14.1983 135.179 14 134.269 14C133.196 14 132.274 14.2333 131.504 14.7C130.758 15.1433 130.174 15.7967 129.754 16.66C129.358 17.5 129.148 18.5383 129.124 19.775C129.124 21.035 129.323 22.1083 129.719 22.995C130.116 23.8817 130.699 24.5583 131.469 25.025C132.239 25.4917 133.173 25.725 134.269 25.725C135.366 25.725 136.334 25.4917 137.174 25.025C138.014 24.535 138.726 23.8 139.309 22.82L141.584 24.255C140.744 25.6083 139.683 26.635 138.399 27.335C137.139 28.0117 135.646 28.35 133.919 28.35ZM153.745 11.9H161.795V14.525H153.745V11.9ZM156.37 6.3H159.17V28H156.37V6.3ZM163.204 19.95C163.204 18.3167 163.565 16.87 164.289 15.61C165.035 14.35 166.039 13.3583 167.299 12.635C168.559 11.9117 169.97 11.55 171.534 11.55C173.12 11.55 174.532 11.9117 175.769 12.635C177.029 13.3583 178.02 14.35 178.744 15.61C179.49 16.87 179.864 18.3167 179.864 19.95C179.864 21.56 179.49 23.0067 178.744 24.29C178.02 25.55 177.029 26.5417 175.769 27.265C174.532 27.9883 173.12 28.35 171.534 28.35C169.97 28.35 168.559 27.9883 167.299 27.265C166.039 26.5417 165.035 25.55 164.289 24.29C163.565 23.0067 163.204 21.56 163.204 19.95ZM166.039 19.95C166.039 21.07 166.272 22.0617 166.739 22.925C167.229 23.7883 167.882 24.4767 168.699 24.99C169.539 25.48 170.484 25.725 171.534 25.725C172.584 25.725 173.517 25.48 174.334 24.99C175.174 24.4767 175.827 23.7883 176.294 22.925C176.784 22.0617 177.029 21.07 177.029 19.95C177.029 18.83 176.784 17.8383 176.294 16.975C175.827 16.0883 175.174 15.4 174.334 14.91C173.517 14.42 172.584 14.175 171.534 14.175C170.484 14.175 169.539 14.42 168.699 14.91C167.882 15.4 167.229 16.0883 166.739 16.975C166.272 17.8383 166.039 18.83 166.039 19.95ZM279.769 78.475L275.669 74.35V73.475L279.769 69.375H280.719L284.994 73.475V74.35L280.719 78.475H279.769ZM278.369 67.1C278.335 64.9167 278.11 62.925 277.694 61.125C277.294 59.325 276.602 57.0917 275.619 54.425C275.385 53.6917 275.269 52.9083 275.269 52.075C275.269 50.475 275.694 49.275 276.544 48.475C277.41 47.6583 278.66 47.25 280.294 47.25C282.01 47.25 283.269 47.6917 284.069 48.575C284.869 49.4417 285.269 50.6417 285.269 52.175C285.269 52.9917 285.16 53.7417 284.944 54.425C283.96 57.0917 283.26 59.325 282.844 61.125C282.444 62.925 282.227 64.9167 282.194 67.1H278.369Z"
                fill="#F6F6F6"
            />
            <Path
                d="M15.875 73.1C17.0583 73.1 17.925 72.7667 18.475 72.1C19.025 71.4333 19.3 70.6417 19.3 69.725V67.975C19.3 66.8917 18.95 66.125 18.25 65.675C17.55 65.2083 16.7583 64.975 15.875 64.975H13.925V73.1H15.875ZM18.95 56.2C18.95 55.2 18.675 54.5083 18.125 54.125C17.575 53.725 16.7833 53.525 15.75 53.525H13.925V60.75H15.95C16.9167 60.75 17.6583 60.375 18.175 59.625C18.6917 58.8583 18.95 57.925 18.95 56.825V56.2ZM17.575 78.225C16.275 78.225 14.5917 78.1917 12.525 78.125C10.4583 78.0583 8.975 78.0167 8.075 78H5.675V48.7H10C11.05 48.7 12.25 48.6667 13.6 48.6C14.95 48.5167 15.925 48.475 16.525 48.475C18.475 48.475 20.1167 48.6333 21.45 48.95C22.8 49.2667 23.8583 49.7417 24.625 50.375C25.3917 51.0083 25.9333 51.7417 26.25 52.575C26.5833 53.4083 26.75 54.4 26.75 55.55C26.75 57.3167 26.3417 58.8333 25.525 60.1C24.7083 61.3667 23.525 62.1583 21.975 62.475C25.9083 62.825 27.875 65.1333 27.875 69.4C27.875 70.6833 27.6833 71.85 27.3 72.9C26.9167 73.9333 26.325 74.8583 25.525 75.675C24.7417 76.475 23.675 77.1 22.325 77.55C20.975 78 19.3917 78.225 17.575 78.225ZM38.4361 68.25V78H30.1361V48.7H33.4361C34.2361 48.7 35.4278 48.6667 37.0111 48.6C38.5945 48.5167 39.9028 48.475 40.9361 48.475C44.5361 48.475 47.2195 49.2667 48.9861 50.85C50.7695 52.4333 51.6611 54.8583 51.6611 58.125C51.6611 60.0583 51.2361 61.775 50.3861 63.275C49.5528 64.775 48.4445 65.9667 47.0611 66.85C47.8111 67.0333 48.4528 67.4583 48.9861 68.125C49.5361 68.7917 49.9611 69.5833 50.2611 70.5C50.5611 71.4 50.8195 72.3167 51.0361 73.25C51.2695 74.1667 51.5278 75.075 51.8111 75.975C52.1111 76.875 52.4361 77.55 52.7861 78H43.5611C43.3778 77.7667 43.2361 77.1167 43.1361 76.05C43.0361 74.9667 42.8945 73.675 42.7111 72.175C42.5445 70.6583 42.3028 69.3917 41.9861 68.375C41.9528 68.375 41.9111 68.375 41.8611 68.375C41.5445 68.375 41.2028 68.375 40.8361 68.375C40.4861 68.3583 40.1778 68.3417 39.9111 68.325C39.6445 68.3083 39.3611 68.2917 39.0611 68.275C38.7778 68.2583 38.5695 68.25 38.4361 68.25ZM38.4361 63.6H39.2361C39.6528 63.6 40.0028 63.5833 40.2861 63.55C40.5695 63.5167 40.8778 63.4583 41.2111 63.375C41.5611 63.275 41.8445 63.125 42.0611 62.925C42.2945 62.725 42.5111 62.4667 42.7111 62.15C42.9111 61.8333 43.0611 61.425 43.1611 60.925C43.2611 60.425 43.3111 59.8417 43.3111 59.175V57.2C43.3111 55.75 42.9278 54.7417 42.1611 54.175C41.4111 53.5917 40.3278 53.3 38.9111 53.3H38.4361V63.6ZM68.7561 78L67.6311 73.325H60.5311L59.5811 78H52.2311L59.8561 50.725L59.2561 48.7H69.5811L77.9311 78H68.7561ZM63.7561 57.3L61.5561 68.225H66.4061L63.7561 57.3ZM78.9922 78V48.7H87.5172V78H78.9922ZM98.8789 78H90.9289V51.05L89.7039 48.7H98.9039L103.504 58.2L107.904 67.675L106.679 56.55V48.7H114.654V78H107.029L101.079 66.425L97.4039 59.175L98.8789 68.775V78ZM138.263 73.1C139.446 73.1 140.313 72.7667 140.863 72.1C141.413 71.4333 141.688 70.6417 141.688 69.725V67.975C141.688 66.8917 141.338 66.125 140.638 65.675C139.938 65.2083 139.146 64.975 138.263 64.975H136.313V73.1H138.263ZM141.338 56.2C141.338 55.2 141.063 54.5083 140.513 54.125C139.963 53.725 139.171 53.525 138.138 53.525H136.313V60.75H138.338C139.304 60.75 140.046 60.375 140.563 59.625C141.079 58.8583 141.338 57.925 141.338 56.825V56.2ZM139.963 78.225C138.663 78.225 136.979 78.1917 134.913 78.125C132.846 78.0583 131.363 78.0167 130.463 78H128.063V48.7H132.388C133.438 48.7 134.638 48.6667 135.988 48.6C137.338 48.5167 138.313 48.475 138.913 48.475C140.863 48.475 142.504 48.6333 143.838 48.95C145.188 49.2667 146.246 49.7417 147.013 50.375C147.779 51.0083 148.321 51.7417 148.638 52.575C148.971 53.4083 149.138 54.4 149.138 55.55C149.138 57.3167 148.729 58.8333 147.913 60.1C147.096 61.3667 145.913 62.1583 144.363 62.475C148.296 62.825 150.263 65.1333 150.263 69.4C150.263 70.6833 150.071 71.85 149.688 72.9C149.304 73.9333 148.713 74.8583 147.913 75.675C147.129 76.475 146.063 77.1 144.713 77.55C143.363 78 141.779 78.225 139.963 78.225ZM163.924 78.525C162.207 78.525 160.682 78.3583 159.349 78.025C158.032 77.6917 156.949 77.2417 156.099 76.675C155.265 76.1083 154.574 75.4083 154.024 74.575C153.49 73.725 153.115 72.8333 152.899 71.9C152.682 70.9667 152.574 69.9333 152.574 68.8V48.7H161.474V67.675C161.474 69.7917 161.69 71.25 162.124 72.05C162.574 72.8333 163.224 73.225 164.074 73.225C164.54 73.225 164.949 73.15 165.299 73C165.649 72.8333 165.974 72.5583 166.274 72.175C166.574 71.775 166.799 71.2083 166.949 70.475C167.115 69.725 167.199 68.8167 167.199 67.75V48.7H175.099V68.95C175.099 70.0667 174.999 71.075 174.799 71.975C174.615 72.875 174.265 73.75 173.749 74.6C173.249 75.4333 172.582 76.1333 171.749 76.7C170.932 77.25 169.857 77.6917 168.524 78.025C167.207 78.3583 165.674 78.525 163.924 78.525ZM187.178 78.525C185.895 78.525 184.695 78.4083 183.578 78.175C182.478 77.9583 181.553 77.6667 180.803 77.3C180.053 76.9333 179.437 76.5833 178.953 76.25C178.487 75.9167 178.095 75.5833 177.778 75.25L178.403 69.175C179.087 70.0917 180.003 70.8917 181.153 71.575C182.303 72.2417 183.545 72.575 184.878 72.575C186.212 72.575 187.17 72.4333 187.753 72.15C188.353 71.8667 188.653 71.35 188.653 70.6C188.653 69.8 188.312 69.1167 187.628 68.55C186.962 67.9833 185.803 67.3 184.153 66.5C183.553 66.2 183.045 65.9333 182.628 65.7C182.212 65.45 181.653 65.05 180.953 64.5C180.27 63.9333 179.712 63.35 179.278 62.75C178.845 62.1333 178.462 61.35 178.128 60.4C177.795 59.4333 177.628 58.4 177.628 57.3C177.628 51.35 180.987 48.375 187.703 48.375C188.77 48.375 189.77 48.4917 190.703 48.725C191.653 48.9417 192.395 49.1833 192.928 49.45C193.462 49.7167 193.945 50.0333 194.378 50.4C194.828 50.75 195.112 51 195.228 51.15C195.345 51.2833 195.428 51.3917 195.478 51.475L194.228 56.3C193.578 55.5333 192.762 54.9667 191.778 54.6C190.812 54.2167 189.887 54.025 189.003 54.025C186.87 54.025 185.803 54.6917 185.803 56.025C185.803 56.375 185.87 56.6917 186.003 56.975C186.137 57.2583 186.353 57.5167 186.653 57.75C186.953 57.9833 187.228 58.1833 187.478 58.35C187.745 58.5167 188.103 58.725 188.553 58.975C189.02 59.2083 189.37 59.4 189.603 59.55C192.037 60.5833 193.82 61.8083 194.953 63.225C196.103 64.6417 196.678 66.3667 196.678 68.4C196.678 71.7 195.862 74.2167 194.228 75.95C192.612 77.6667 190.262 78.525 187.178 78.525ZM203.977 78V55.325H198.127V48.7H218.277V55.325H212.427V78H203.977ZM238.219 78H220.494V48.7H237.844L237.344 54.6L228.769 54.35V60H235.519V65.85L228.769 65.35V72L238.219 71.75V78ZM248.714 68.25V78H240.414V48.7H243.714C244.514 48.7 245.706 48.6667 247.289 48.6C248.873 48.5167 250.181 48.475 251.214 48.475C254.814 48.475 257.498 49.2667 259.264 50.85C261.048 52.4333 261.939 54.8583 261.939 58.125C261.939 60.0583 261.514 61.775 260.664 63.275C259.831 64.775 258.723 65.9667 257.339 66.85C258.089 67.0333 258.731 67.4583 259.264 68.125C259.814 68.7917 260.239 69.5833 260.539 70.5C260.839 71.4 261.098 72.3167 261.314 73.25C261.548 74.1667 261.806 75.075 262.089 75.975C262.389 76.875 262.714 77.55 263.064 78H253.839C253.656 77.7667 253.514 77.1167 253.414 76.05C253.314 74.9667 253.173 73.675 252.989 72.175C252.823 70.6583 252.581 69.3917 252.264 68.375C252.231 68.375 252.189 68.375 252.139 68.375C251.823 68.375 251.481 68.375 251.114 68.375C250.764 68.3583 250.456 68.3417 250.189 68.325C249.923 68.3083 249.639 68.2917 249.339 68.275C249.056 68.2583 248.848 68.25 248.714 68.25ZM248.714 63.6H249.514C249.931 63.6 250.281 63.5833 250.564 63.55C250.848 63.5167 251.156 63.4583 251.489 63.375C251.839 63.275 252.123 63.125 252.339 62.925C252.573 62.725 252.789 62.4667 252.989 62.15C253.189 61.8333 253.339 61.425 253.439 60.925C253.539 60.425 253.589 59.8417 253.589 59.175V57.2C253.589 55.75 253.206 54.7417 252.439 54.175C251.689 53.5917 250.606 53.3 249.189 53.3H248.714V63.6Z"
                fill="white"
            />
        </G>
        <G filter="url(#filter1_dd_45_20)">
            <Path
                d="M6.01438 96.8H7.37438V108H6.01438V96.8ZM6.76638 98.08V96.8H9.05438C9.77971 96.8 10.425 96.9387 10.9904 97.216C11.5664 97.4827 12.0197 97.8667 12.3504 98.368C12.6917 98.8693 12.8624 99.4667 12.8624 100.16C12.8624 100.843 12.6917 101.44 12.3504 101.952C12.0197 102.453 11.5664 102.843 10.9904 103.12C10.425 103.387 9.77971 103.52 9.05438 103.52H6.76638V102.24H9.05438C9.77971 102.24 10.3664 102.064 10.8144 101.712C11.273 101.36 11.5024 100.843 11.5024 100.16C11.5024 99.4667 11.273 98.9493 10.8144 98.608C10.3664 98.256 9.77971 98.08 9.05438 98.08H6.76638ZM14.7 95.52H15.98V108H14.7V95.52ZM18.9635 105.728C18.9635 106.005 19.0275 106.245 19.1555 106.448C19.2942 106.651 19.4808 106.805 19.7155 106.912C19.9608 107.008 20.2382 107.056 20.5475 107.056C20.9422 107.056 21.2942 106.976 21.6035 106.816C21.9235 106.656 22.1742 106.432 22.3555 106.144C22.5475 105.845 22.6435 105.504 22.6435 105.12L22.8995 106.08C22.8995 106.549 22.7555 106.939 22.4675 107.248C22.1902 107.557 21.8435 107.787 21.4275 107.936C21.0222 108.085 20.6168 108.16 20.2115 108.16C19.7635 108.16 19.3422 108.069 18.9475 107.888C18.5635 107.696 18.2542 107.424 18.0195 107.072C17.7848 106.72 17.6675 106.293 17.6675 105.792C17.6675 105.077 17.9182 104.507 18.4195 104.08C18.9315 103.643 19.6408 103.424 20.5475 103.424C21.0808 103.424 21.5235 103.488 21.8755 103.616C22.2382 103.733 22.5262 103.872 22.7395 104.032C22.9528 104.181 23.0968 104.304 23.1715 104.4V105.152C22.7982 104.896 22.4142 104.715 22.0195 104.608C21.6248 104.491 21.2035 104.432 20.7555 104.432C20.3395 104.432 19.9982 104.485 19.7315 104.592C19.4755 104.699 19.2835 104.848 19.1555 105.04C19.0275 105.232 18.9635 105.461 18.9635 105.728ZM18.7715 102.336L18.1475 101.392C18.4248 101.189 18.8035 100.987 19.2835 100.784C19.7742 100.581 20.3608 100.48 21.0435 100.48C21.6195 100.48 22.1208 100.571 22.5475 100.752C22.9848 100.923 23.3208 101.173 23.5555 101.504C23.8008 101.835 23.9235 102.24 23.9235 102.72V108H22.6435V102.896C22.6435 102.64 22.6008 102.432 22.5155 102.272C22.4302 102.101 22.3075 101.968 22.1475 101.872C21.9982 101.776 21.8222 101.707 21.6195 101.664C21.4168 101.621 21.2035 101.6 20.9795 101.6C20.6168 101.6 20.2862 101.643 19.9875 101.728C19.6995 101.813 19.4542 101.915 19.2515 102.032C19.0488 102.149 18.8888 102.251 18.7715 102.336ZM31.8525 100.64L27.0525 111.52H25.6125L27.6285 106.96L24.8125 100.64H26.3325L28.6685 106.4L28.1405 106.336L30.4125 100.64H31.8525ZM33.2743 106.24L34.5543 106.72L32.7943 110.72L31.8663 110.384L33.2743 106.24ZM37.8601 108V106.72H43.5081V108H37.8601ZM37.8601 98.08V96.8H43.5081V98.08H37.8601ZM37.8601 102.56V101.28H43.1881V102.56H37.8601ZM37.1081 96.8H38.4681V108H37.1081V96.8ZM50.545 103.52C50.545 102.912 50.4117 102.453 50.145 102.144C49.8783 101.835 49.489 101.68 48.977 101.68C48.6037 101.68 48.273 101.76 47.985 101.92C47.7077 102.069 47.489 102.283 47.329 102.56C47.1797 102.837 47.105 103.157 47.105 103.52V108H45.825V100.64H47.105V101.792C47.3503 101.344 47.6543 101.013 48.017 100.8C48.3903 100.587 48.817 100.48 49.297 100.48C50.0757 100.48 50.689 100.741 51.137 101.264C51.5957 101.776 51.825 102.475 51.825 103.36V108H50.545V103.52ZM54.0233 97.6C54.0233 97.3547 54.1086 97.152 54.2793 96.992C54.4499 96.8213 54.6526 96.736 54.8873 96.736C55.1326 96.736 55.3353 96.8213 55.4953 96.992C55.6659 97.152 55.7513 97.3547 55.7513 97.6C55.7513 97.8347 55.6659 98.0373 55.4953 98.208C55.3353 98.3787 55.1326 98.464 54.8873 98.464C54.6526 98.464 54.4499 98.3787 54.2793 98.208C54.1086 98.0373 54.0233 97.8347 54.0233 97.6ZM52.7592 109.824C52.8446 109.952 52.9512 110.053 53.0793 110.128C53.2179 110.203 53.3726 110.24 53.5433 110.24C53.7246 110.24 53.8686 110.192 53.9753 110.096C54.0926 110 54.1779 109.845 54.2313 109.632C54.2846 109.419 54.3113 109.141 54.3113 108.8V100.64H55.5913V108.96C55.5913 109.493 55.5059 109.952 55.3353 110.336C55.1753 110.72 54.9353 111.013 54.6153 111.216C54.2953 111.419 53.9113 111.52 53.4633 111.52C53.2499 111.52 53.0579 111.493 52.8872 111.44C52.7166 111.397 52.5619 111.328 52.4232 111.232C52.2846 111.136 52.1619 111.019 52.0552 110.88L52.7592 109.824ZM57.5913 104.32C57.5913 103.573 57.7566 102.912 58.0872 102.336C58.4286 101.76 58.8873 101.307 59.4633 100.976C60.0393 100.645 60.6846 100.48 61.3993 100.48C62.1246 100.48 62.7699 100.645 63.3353 100.976C63.9113 101.307 64.3646 101.76 64.6953 102.336C65.0366 102.912 65.2073 103.573 65.2073 104.32C65.2073 105.056 65.0366 105.717 64.6953 106.304C64.3646 106.88 63.9113 107.333 63.3353 107.664C62.7699 107.995 62.1246 108.16 61.3993 108.16C60.6846 108.16 60.0393 107.995 59.4633 107.664C58.8873 107.333 58.4286 106.88 58.0872 106.304C57.7566 105.717 57.5913 105.056 57.5913 104.32ZM58.8873 104.32C58.8873 104.832 58.9939 105.285 59.2073 105.68C59.4313 106.075 59.7299 106.389 60.1033 106.624C60.4873 106.848 60.9193 106.96 61.3993 106.96C61.8793 106.96 62.3059 106.848 62.6793 106.624C63.0633 106.389 63.3619 106.075 63.5753 105.68C63.7993 105.285 63.9113 104.832 63.9113 104.32C63.9113 103.808 63.7993 103.355 63.5753 102.96C63.3619 102.555 63.0633 102.24 62.6793 102.016C62.3059 101.792 61.8793 101.68 61.3993 101.68C60.9193 101.68 60.4873 101.792 60.1033 102.016C59.7299 102.24 59.4313 102.555 59.2073 102.96C58.9939 103.355 58.8873 103.808 58.8873 104.32ZM72.5713 100.64L67.7713 111.52H66.3313L68.3473 106.96L65.5312 100.64H67.0513L69.3873 106.4L68.8593 106.336L71.1313 100.64H72.5713ZM79.151 105.728C79.151 106.005 79.215 106.245 79.343 106.448C79.4817 106.651 79.6683 106.805 79.903 106.912C80.1483 107.008 80.4257 107.056 80.735 107.056C81.1297 107.056 81.4817 106.976 81.791 106.816C82.111 106.656 82.3617 106.432 82.543 106.144C82.735 105.845 82.831 105.504 82.831 105.12L83.087 106.08C83.087 106.549 82.943 106.939 82.655 107.248C82.3777 107.557 82.031 107.787 81.615 107.936C81.2097 108.085 80.8043 108.16 80.399 108.16C79.951 108.16 79.5297 108.069 79.135 107.888C78.751 107.696 78.4417 107.424 78.207 107.072C77.9723 106.72 77.855 106.293 77.855 105.792C77.855 105.077 78.1057 104.507 78.607 104.08C79.119 103.643 79.8283 103.424 80.735 103.424C81.2683 103.424 81.711 103.488 82.063 103.616C82.4257 103.733 82.7137 103.872 82.927 104.032C83.1403 104.181 83.2843 104.304 83.359 104.4V105.152C82.9857 104.896 82.6017 104.715 82.207 104.608C81.8123 104.491 81.391 104.432 80.943 104.432C80.527 104.432 80.1857 104.485 79.919 104.592C79.663 104.699 79.471 104.848 79.343 105.04C79.215 105.232 79.151 105.461 79.151 105.728ZM78.959 102.336L78.335 101.392C78.6123 101.189 78.991 100.987 79.471 100.784C79.9617 100.581 80.5483 100.48 81.231 100.48C81.807 100.48 82.3083 100.571 82.735 100.752C83.1723 100.923 83.5083 101.173 83.743 101.504C83.9883 101.835 84.111 102.24 84.111 102.72V108H82.831V102.896C82.831 102.64 82.7883 102.432 82.703 102.272C82.6177 102.101 82.495 101.968 82.335 101.872C82.1857 101.776 82.0097 101.707 81.807 101.664C81.6043 101.621 81.391 101.6 81.167 101.6C80.8043 101.6 80.4737 101.643 80.175 101.728C79.887 101.813 79.6417 101.915 79.439 102.032C79.2363 102.149 79.0763 102.251 78.959 102.336ZM90.9981 103.52C90.9981 102.912 90.8648 102.453 90.5981 102.144C90.3315 101.835 89.9421 101.68 89.4301 101.68C89.0568 101.68 88.7261 101.76 88.4381 101.92C88.1608 102.069 87.9421 102.283 87.7821 102.56C87.6328 102.837 87.5581 103.157 87.5581 103.52V108H86.2781V100.64H87.5581V101.792C87.8035 101.344 88.1075 101.013 88.4701 100.8C88.8435 100.587 89.2701 100.48 89.7501 100.48C90.5288 100.48 91.1421 100.741 91.5901 101.264C92.0488 101.776 92.2781 102.475 92.2781 103.36V108H90.9981V103.52ZM100.204 95.52H101.484V108H100.204V95.52ZM94.0444 104.32C94.0444 103.52 94.2097 102.837 94.5404 102.272C94.871 101.696 95.3137 101.253 95.8684 100.944C96.423 100.635 97.031 100.48 97.6924 100.48C98.311 100.48 98.8497 100.635 99.3084 100.944C99.767 101.253 100.124 101.696 100.38 102.272C100.647 102.837 100.78 103.52 100.78 104.32C100.78 105.109 100.647 105.792 100.38 106.368C100.124 106.944 99.767 107.387 99.3084 107.696C98.8497 108.005 98.311 108.16 97.6924 108.16C97.031 108.16 96.423 108.005 95.8684 107.696C95.3137 107.387 94.871 106.944 94.5404 106.368C94.2097 105.792 94.0444 105.109 94.0444 104.32ZM95.3404 104.32C95.3404 104.885 95.4524 105.365 95.6764 105.76C95.911 106.155 96.2204 106.453 96.6044 106.656C96.9884 106.859 97.4044 106.96 97.8524 106.96C98.2257 106.96 98.5937 106.859 98.9564 106.656C99.319 106.453 99.6177 106.155 99.8524 105.76C100.087 105.365 100.204 104.885 100.204 104.32C100.204 103.755 100.087 103.275 99.8524 102.88C99.6177 102.485 99.319 102.187 98.9564 101.984C98.5937 101.781 98.2257 101.68 97.8524 101.68C97.4044 101.68 96.9884 101.781 96.6044 101.984C96.2204 102.187 95.911 102.485 95.6764 102.88C95.4524 103.275 95.3404 103.755 95.3404 104.32ZM109.438 108V106.72H115.086V108H109.438ZM109.438 98.08V96.8H115.086V98.08H109.438ZM109.438 102.56V101.28H114.766V102.56H109.438ZM108.686 96.8H110.046V108H108.686V96.8ZM121.323 100.64H122.763L120.251 104.208L122.923 108H121.483L119.563 105.216L117.643 108H116.203L118.875 104.208L116.363 100.64H117.803L119.563 103.2L121.323 100.64ZM125.322 111.52H124.042V100.64H125.322V111.52ZM131.482 104.32C131.482 105.109 131.317 105.792 130.986 106.368C130.655 106.944 130.213 107.387 129.658 107.696C129.114 108.005 128.506 108.16 127.834 108.16C127.226 108.16 126.687 108.005 126.218 107.696C125.759 107.387 125.397 106.944 125.13 106.368C124.874 105.792 124.746 105.109 124.746 104.32C124.746 103.52 124.874 102.837 125.13 102.272C125.397 101.696 125.759 101.253 126.218 100.944C126.687 100.635 127.226 100.48 127.834 100.48C128.506 100.48 129.114 100.635 129.658 100.944C130.213 101.253 130.655 101.696 130.986 102.272C131.317 102.837 131.482 103.52 131.482 104.32ZM130.186 104.32C130.186 103.755 130.069 103.275 129.834 102.88C129.61 102.485 129.306 102.187 128.922 101.984C128.549 101.781 128.133 101.68 127.674 101.68C127.301 101.68 126.933 101.781 126.57 101.984C126.207 102.187 125.909 102.485 125.674 102.88C125.439 103.275 125.322 103.755 125.322 104.32C125.322 104.885 125.439 105.365 125.674 105.76C125.909 106.155 126.207 106.453 126.57 106.656C126.933 106.859 127.301 106.96 127.674 106.96C128.133 106.96 128.549 106.859 128.922 106.656C129.306 106.453 129.61 106.155 129.834 105.76C130.069 105.365 130.186 104.885 130.186 104.32ZM133.247 95.52H134.527V108H133.247V95.52ZM136.294 104.32C136.294 103.573 136.46 102.912 136.79 102.336C137.132 101.76 137.59 101.307 138.166 100.976C138.742 100.645 139.388 100.48 140.102 100.48C140.828 100.48 141.473 100.645 142.038 100.976C142.614 101.307 143.068 101.76 143.398 102.336C143.74 102.912 143.91 103.573 143.91 104.32C143.91 105.056 143.74 105.717 143.398 106.304C143.068 106.88 142.614 107.333 142.038 107.664C141.473 107.995 140.828 108.16 140.102 108.16C139.388 108.16 138.742 107.995 138.166 107.664C137.59 107.333 137.132 106.88 136.79 106.304C136.46 105.717 136.294 105.056 136.294 104.32ZM137.59 104.32C137.59 104.832 137.697 105.285 137.91 105.68C138.134 106.075 138.433 106.389 138.806 106.624C139.19 106.848 139.622 106.96 140.102 106.96C140.582 106.96 141.009 106.848 141.382 106.624C141.766 106.389 142.065 106.075 142.278 105.68C142.502 105.285 142.614 104.832 142.614 104.32C142.614 103.808 142.502 103.355 142.278 102.96C142.065 102.555 141.766 102.24 141.382 102.016C141.009 101.792 140.582 101.68 140.102 101.68C139.622 101.68 139.19 101.792 138.806 102.016C138.433 102.24 138.134 102.555 137.91 102.96C137.697 103.355 137.59 103.808 137.59 104.32ZM146.949 100.64V108H145.669V100.64H146.949ZM149.173 102.048C149.002 101.92 148.847 101.829 148.709 101.776C148.57 101.712 148.394 101.68 148.181 101.68C147.861 101.68 147.61 101.76 147.429 101.92C147.247 102.08 147.119 102.299 147.045 102.576C146.981 102.853 146.949 103.168 146.949 103.52H146.373C146.373 102.933 146.474 102.416 146.677 101.968C146.89 101.509 147.162 101.147 147.493 100.88C147.823 100.613 148.159 100.48 148.501 100.48C148.767 100.48 149.013 100.517 149.237 100.592C149.471 100.656 149.685 100.789 149.877 100.992L149.173 102.048ZM153.767 108.16C153.084 108.16 152.476 108 151.943 107.68C151.42 107.349 151.009 106.896 150.711 106.32C150.423 105.744 150.279 105.077 150.279 104.32C150.279 103.552 150.428 102.88 150.727 102.304C151.036 101.728 151.463 101.28 152.007 100.96C152.561 100.64 153.201 100.48 153.927 100.48C154.652 100.48 155.271 100.635 155.783 100.944C156.305 101.243 156.705 101.675 156.983 102.24C157.26 102.805 157.399 103.477 157.399 104.256C157.399 104.331 157.393 104.411 157.383 104.496C157.383 104.571 157.383 104.619 157.383 104.64H151.095V103.552H156.375L155.863 104.288C155.895 104.235 155.927 104.155 155.959 104.048C155.991 103.931 156.007 103.835 156.007 103.76C156.007 103.323 155.916 102.944 155.735 102.624C155.564 102.304 155.324 102.053 155.015 101.872C154.705 101.691 154.343 101.6 153.927 101.6C153.436 101.6 153.015 101.707 152.663 101.92C152.321 102.123 152.055 102.421 151.863 102.816C151.681 103.2 151.585 103.675 151.575 104.24C151.575 104.816 151.665 105.307 151.847 105.712C152.028 106.117 152.295 106.427 152.647 106.64C152.999 106.853 153.425 106.96 153.927 106.96C154.428 106.96 154.871 106.853 155.255 106.64C155.639 106.416 155.964 106.08 156.231 105.632L157.271 106.288C156.887 106.907 156.401 107.376 155.815 107.696C155.239 108.005 154.556 108.16 153.767 108.16ZM162.83 100.64H164.27L166.11 105.424L168.11 100.08L170.254 105.456L172.11 100.64H173.55L170.35 108.56L168.126 103.2L166.03 108.56L162.83 100.64ZM174.825 97.6C174.825 97.3547 174.91 97.1467 175.081 96.976C175.262 96.8053 175.47 96.72 175.705 96.72C175.95 96.72 176.158 96.8053 176.329 96.976C176.5 97.1467 176.585 97.3547 176.585 97.6C176.585 97.8347 176.5 98.0427 176.329 98.224C176.158 98.3947 175.95 98.48 175.705 98.48C175.47 98.48 175.262 98.3947 175.081 98.224C174.91 98.0427 174.825 97.8347 174.825 97.6ZM175.065 100.64H176.345V108H175.065V100.64ZM177.861 100.64H181.541V101.84H177.861V100.64ZM179.061 98.08H180.341V108H179.061V98.08ZM184.105 95.52V108H182.825V95.52H184.105ZM187.545 103.52C187.545 102.912 187.412 102.453 187.145 102.144C186.889 101.835 186.5 101.68 185.977 101.68C185.604 101.68 185.273 101.76 184.985 101.92C184.708 102.08 184.489 102.299 184.329 102.576C184.18 102.853 184.105 103.168 184.105 103.52H183.689C183.689 102.933 183.801 102.416 184.025 101.968C184.249 101.509 184.553 101.147 184.937 100.88C185.332 100.613 185.785 100.48 186.297 100.48C186.809 100.48 187.252 100.587 187.625 100.8C188.009 101.013 188.302 101.333 188.505 101.76C188.718 102.187 188.825 102.72 188.825 103.36V108H187.545V103.52ZM196.86 108V106.72H202.508V108H196.86ZM196.86 98.08V96.8H202.508V98.08H196.86ZM196.86 102.56V101.28H202.188V102.56H196.86ZM196.108 96.8H197.468V108H196.108V96.8ZM208.745 100.64H210.185L207.673 104.208L210.345 108H208.905L206.985 105.216L205.065 108H203.625L206.297 104.208L203.785 100.64H205.225L206.985 103.2L208.745 100.64ZM211.885 104.32C211.885 104.832 211.992 105.285 212.205 105.68C212.429 106.075 212.728 106.389 213.101 106.624C213.485 106.848 213.917 106.96 214.397 106.96C214.792 106.96 215.16 106.901 215.501 106.784C215.853 106.656 216.157 106.491 216.413 106.288C216.669 106.075 216.851 105.851 216.957 105.616V107.216C216.701 107.515 216.333 107.749 215.853 107.92C215.384 108.08 214.899 108.16 214.397 108.16C213.683 108.16 213.037 107.995 212.461 107.664C211.885 107.333 211.427 106.88 211.085 106.304C210.755 105.717 210.589 105.056 210.589 104.32C210.589 103.573 210.755 102.912 211.085 102.336C211.427 101.76 211.885 101.307 212.461 100.976C213.037 100.645 213.683 100.48 214.397 100.48C214.899 100.48 215.384 100.565 215.853 100.736C216.333 100.896 216.701 101.125 216.957 101.424V103.024C216.851 102.779 216.669 102.555 216.413 102.352C216.157 102.149 215.853 101.989 215.501 101.872C215.16 101.744 214.792 101.68 214.397 101.68C213.917 101.68 213.485 101.792 213.101 102.016C212.728 102.24 212.429 102.555 212.205 102.96C211.992 103.355 211.885 103.808 211.885 104.32ZM218.95 97.6C218.95 97.3547 219.035 97.1467 219.206 96.976C219.387 96.8053 219.595 96.72 219.83 96.72C220.075 96.72 220.283 96.8053 220.454 96.976C220.625 97.1467 220.71 97.3547 220.71 97.6C220.71 97.8347 220.625 98.0427 220.454 98.224C220.283 98.3947 220.075 98.48 219.83 98.48C219.595 98.48 219.387 98.3947 219.206 98.224C219.035 98.0427 218.95 97.8347 218.95 97.6ZM219.19 100.64H220.47V108H219.19V100.64ZM221.986 100.64H225.666V101.84H221.986V100.64ZM223.186 98.08H224.466V108H223.186V98.08ZM226.95 97.6C226.95 97.3547 227.035 97.1467 227.206 96.976C227.387 96.8053 227.595 96.72 227.83 96.72C228.075 96.72 228.283 96.8053 228.454 96.976C228.625 97.1467 228.71 97.3547 228.71 97.6C228.71 97.8347 228.625 98.0427 228.454 98.224C228.283 98.3947 228.075 98.48 227.83 98.48C227.595 98.48 227.387 98.3947 227.206 98.224C227.035 98.0427 226.95 97.8347 226.95 97.6ZM227.19 100.64H228.47V108H227.19V100.64ZM235.826 103.52C235.826 102.912 235.693 102.453 235.426 102.144C235.16 101.835 234.77 101.68 234.258 101.68C233.885 101.68 233.554 101.76 233.266 101.92C232.989 102.069 232.77 102.283 232.61 102.56C232.461 102.837 232.386 103.157 232.386 103.52V108H231.106V100.64H232.386V101.792C232.632 101.344 232.936 101.013 233.298 100.8C233.672 100.587 234.098 100.48 234.578 100.48C235.357 100.48 235.97 100.741 236.418 101.264C236.877 101.776 237.106 102.475 237.106 103.36V108H235.826V103.52ZM239.017 108.48H240.312C240.312 108.832 240.409 109.157 240.601 109.456C240.793 109.765 241.065 110.011 241.417 110.192C241.769 110.384 242.185 110.48 242.665 110.48C243.038 110.48 243.406 110.389 243.769 110.208C244.131 110.027 244.43 109.739 244.665 109.344C244.91 108.96 245.033 108.459 245.033 107.84V100.64H246.312V107.84C246.312 108.683 246.137 109.387 245.785 109.952C245.433 110.528 244.979 110.96 244.425 111.248C243.87 111.536 243.283 111.68 242.665 111.68C241.95 111.68 241.315 111.547 240.761 111.28C240.217 111.013 239.79 110.635 239.481 110.144C239.171 109.664 239.017 109.109 239.017 108.48ZM238.873 104.32C238.873 103.52 239.038 102.837 239.368 102.272C239.699 101.696 240.142 101.253 240.697 100.944C241.251 100.635 241.859 100.48 242.521 100.48C243.139 100.48 243.678 100.635 244.137 100.944C244.595 101.253 244.953 101.696 245.209 102.272C245.475 102.837 245.609 103.52 245.609 104.32C245.609 105.109 245.475 105.792 245.209 106.368C244.953 106.944 244.595 107.387 244.137 107.696C243.678 108.005 243.139 108.16 242.521 108.16C241.859 108.16 241.251 108.005 240.697 107.696C240.142 107.387 239.699 106.944 239.368 106.368C239.038 105.792 238.873 105.109 238.873 104.32ZM240.169 104.32C240.169 104.885 240.281 105.365 240.505 105.76C240.739 106.155 241.049 106.453 241.433 106.656C241.817 106.859 242.233 106.96 242.681 106.96C243.054 106.96 243.422 106.859 243.785 106.656C244.147 106.453 244.446 106.155 244.681 105.76C244.915 105.365 245.033 104.885 245.033 104.32C245.033 103.893 244.963 103.52 244.825 103.2C244.686 102.869 244.499 102.592 244.265 102.368C244.041 102.144 243.79 101.973 243.513 101.856C243.235 101.739 242.958 101.68 242.681 101.68C242.233 101.68 241.817 101.781 241.433 101.984C241.049 102.187 240.739 102.485 240.505 102.88C240.281 103.275 240.169 103.755 240.169 104.32ZM253.514 96.8H254.874V108H253.514V96.8ZM254.266 98.08V96.8H256.554C257.28 96.8 257.925 96.9387 258.49 97.216C259.066 97.4827 259.52 97.8667 259.85 98.368C260.192 98.8693 260.362 99.4667 260.362 100.16C260.362 100.843 260.192 101.44 259.85 101.952C259.52 102.453 259.066 102.843 258.49 103.12C257.925 103.387 257.28 103.52 256.554 103.52H254.266V102.24H256.554C257.28 102.24 257.866 102.064 258.314 101.712C258.773 101.36 259.002 100.843 259.002 100.16C259.002 99.4667 258.773 98.9493 258.314 98.608C257.866 98.256 257.28 98.08 256.554 98.08H254.266ZM263.168 105.12C263.168 105.707 263.301 106.16 263.568 106.48C263.834 106.8 264.224 106.96 264.736 106.96C265.109 106.96 265.434 106.885 265.712 106.736C266 106.576 266.218 106.357 266.368 106.08C266.528 105.803 266.608 105.483 266.608 105.12V100.64H267.888V108H266.608V106.848C266.362 107.285 266.058 107.616 265.696 107.84C265.333 108.053 264.906 108.16 264.416 108.16C263.648 108.16 263.034 107.899 262.576 107.376C262.117 106.853 261.888 106.155 261.888 105.28V100.64H263.168V105.12ZM273.894 101.84H269.814V100.64H276.214L271.654 106.8H275.894V108H269.334L273.894 101.84ZM281.738 101.84H277.658V100.64H284.058L279.498 106.8H283.738V108H277.178L281.738 101.84ZM285.497 95.52H286.777V108H285.497V95.52ZM292.032 108.16C291.35 108.16 290.742 108 290.208 107.68C289.686 107.349 289.275 106.896 288.976 106.32C288.688 105.744 288.544 105.077 288.544 104.32C288.544 103.552 288.694 102.88 288.992 102.304C289.302 101.728 289.728 101.28 290.272 100.96C290.827 100.64 291.467 100.48 292.192 100.48C292.918 100.48 293.536 100.635 294.048 100.944C294.571 101.243 294.971 101.675 295.248 102.24C295.526 102.805 295.664 103.477 295.664 104.256C295.664 104.331 295.659 104.411 295.648 104.496C295.648 104.571 295.648 104.619 295.648 104.64H289.36V103.552H294.64L294.128 104.288C294.16 104.235 294.192 104.155 294.224 104.048C294.256 103.931 294.272 103.835 294.272 103.76C294.272 103.323 294.182 102.944 294 102.624C293.83 102.304 293.59 102.053 293.28 101.872C292.971 101.691 292.608 101.6 292.192 101.6C291.702 101.6 291.28 101.707 290.928 101.92C290.587 102.123 290.32 102.421 290.128 102.816C289.947 103.2 289.851 103.675 289.84 104.24C289.84 104.816 289.931 105.307 290.112 105.712C290.294 106.117 290.56 106.427 290.912 106.64C291.264 106.853 291.691 106.96 292.192 106.96C292.694 106.96 293.136 106.853 293.52 106.64C293.904 106.416 294.23 106.08 294.496 105.632L295.536 106.288C295.152 106.907 294.667 107.376 294.08 107.696C293.504 108.005 292.822 108.16 292.032 108.16ZM297.723 105.744C297.872 105.968 298.043 106.176 298.235 106.368C298.427 106.56 298.645 106.715 298.891 106.832C299.147 106.939 299.424 106.992 299.723 106.992C300.085 106.992 300.368 106.912 300.571 106.752C300.784 106.581 300.891 106.352 300.891 106.064C300.891 105.808 300.805 105.595 300.635 105.424C300.475 105.243 300.267 105.093 300.011 104.976C299.755 104.848 299.483 104.731 299.195 104.624C298.875 104.496 298.549 104.347 298.219 104.176C297.899 103.995 297.627 103.765 297.403 103.488C297.189 103.2 297.083 102.843 297.083 102.416C297.083 101.979 297.195 101.616 297.419 101.328C297.653 101.04 297.952 100.827 298.315 100.688C298.688 100.549 299.072 100.48 299.467 100.48C299.861 100.48 300.229 100.544 300.571 100.672C300.923 100.8 301.232 100.971 301.499 101.184C301.765 101.397 301.973 101.643 302.123 101.92L301.099 102.576C300.896 102.299 300.64 102.069 300.331 101.888C300.032 101.707 299.691 101.616 299.307 101.616C299.04 101.616 298.811 101.675 298.619 101.792C298.427 101.909 298.331 102.091 298.331 102.336C298.331 102.528 298.405 102.699 298.555 102.848C298.704 102.997 298.896 103.131 299.131 103.248C299.365 103.365 299.611 103.477 299.867 103.584C300.293 103.755 300.683 103.941 301.035 104.144C301.387 104.336 301.664 104.571 301.867 104.848C302.08 105.125 302.187 105.483 302.187 105.92C302.187 106.56 301.952 107.093 301.483 107.52C301.024 107.947 300.416 108.16 299.659 108.16C299.168 108.16 298.725 108.075 298.331 107.904C297.936 107.723 297.6 107.493 297.323 107.216C297.056 106.939 296.853 106.656 296.715 106.368L297.723 105.744ZM308.989 107.36C308.989 107.115 309.074 106.907 309.245 106.736C309.426 106.565 309.634 106.48 309.869 106.48C310.114 106.48 310.322 106.565 310.493 106.736C310.663 106.907 310.749 107.115 310.749 107.36C310.749 107.595 310.663 107.803 310.493 107.984C310.322 108.155 310.114 108.24 309.869 108.24C309.634 108.24 309.426 108.155 309.245 107.984C309.074 107.803 308.989 107.595 308.989 107.36Z"
                fill="white"
            />
        </G>
        <Defs></Defs>
    </Svg>
);
export default Heading;