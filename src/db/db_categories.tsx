import { CategoryDataExt } from "../models"

const categories: CategoryDataExt[] = [
  {
    id: 1,
    type: 'dernew',
    title: 'Derňew işi',
    icon: <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m23.854 23.146-3-3c.705-.862 1.146-1.948 1.146-3.146 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5c1.198 0 2.284-.441 3.146-1.146l3 3c.195.195.512.195.707 0s.195-.512 0-.707zm-6.854-2.146c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm-5-12c-1.103 0-2 .897-2 2 0 3.416-.437 8.263-4.213 10.909-.224.158-.537.105-.697-.122-.158-.227-.104-.538.123-.696 3.395-2.379 3.787-6.898 3.787-10.091 0-1.654 1.346-3 3-3 1.421 0 2.657 1.01 2.94 2.4.055.271-.12.534-.39.59-.27.053-.535-.12-.589-.391-.188-.927-1.013-1.6-1.96-1.6zm6.859.522c.056.271-.119.535-.389.591-.264.055-.536-.117-.59-.39-.562-2.737-2.999-4.724-5.794-4.724-1.677 0-3.282.719-4.405 1.972-.185.206-.501.223-.706.038-.206-.184-.223-.5-.039-.706 1.312-1.464 3.189-2.304 5.15-2.304 3.269 0 6.117 2.322 6.774 5.522zm-12.859 1.478c0 7.458-3.802 8.752-5.436 8.962-.269.036-.526-.157-.56-.433-.035-.273.159-.524.432-.56 1.373-.176 4.564-1.306 4.564-7.97 0-.182.007-.362.022-.541.023-.275.263-.475.54-.457.275.022.479.264.457.539-.013.151-.019.305-.019.459zm-5 2.5v-2.5c0-6.065 4.935-11 11-11 2.4 0 4.683.763 6.601 2.206.221.166.265.479.099.7-.166.222-.479.267-.7.099-1.744-1.312-3.818-2.005-6-2.005-5.514 0-10 4.486-10 10v2.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5zm20-6.855c-.121-.249-.017-.548.231-.669.251-.12.549-.016.668.231.73 1.503 1.1 3.115 1.1 4.793 0 .302 0 .652-.005 1.044-.003.274-.227.494-.5.494h-.006c-.276-.004-.497-.23-.494-.506.005-.388.005-.734.005-1.032 0-1.525-.336-2.99-1-4.355z"/></svg>
  },
  {
    id: 2,
    type: 'zahmet',
    title: 'Zähmet kodeksi',
    icon: 
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m17.125,12.885c-1.048-1.044-2.682-1.148-3.855-.322l-5.27-5.27v-3.293c0-.834-.449-1.611-1.172-2.028L3.847.252C3.111-.174,2.178-.05,1.577.551L.551,1.577C-.05,2.178-.173,3.11.251,3.847l1.719,2.981c.417.723,1.194,1.172,2.029,1.172h3.293l5.267,5.267c-.364.506-.567,1.106-.567,1.741,0,.802.313,1.555.882,2.121l6.021,5.993c.564.562,1.333.878,2.127.878.978,0,1.791-.448,2.332-1.106.963-1.175.828-2.983-.309-4.117l-5.92-5.892ZM2.836,6.328l-1.719-2.981c-.199-.345-.141-.781.14-1.062l1.026-1.026c.281-.281.72-.338,1.063-.141l2.98,1.72c.415.239.672.686.672,1.163v3h-3c-.478,0-.923-.258-1.163-.672Zm19.744,15.931c-.367.447-.885.71-1.458.738-.57.026-1.121-.185-1.522-.584l-6.021-5.993c-.378-.377-.587-.879-.587-1.412,0-.534.208-1.036.587-1.415.392-.39.906-.585,1.419-.585s1.028.195,1.42.585t0,0l5.919,5.892c.776.773.882,1.992.241,2.773ZM9.278,5.396C10.063,2.694,12.353.625,15.111.124c1.095-.198,2.187-.159,3.244.116.498.13.876.503,1.012.999.134.491,0,1.001-.358,1.362l-3.543,3.573c-.646.646-.646,1.696-.001,2.341s1.694.644,2.339,0l3.557-3.587c.357-.362.863-.499,1.356-.369.498.132.875.509,1.01,1.009.284,1.059.331,2.152.139,3.252-.336,1.931-1.468,3.694-3.107,4.838-.087.061-.187.09-.286.09-.158,0-.313-.074-.411-.214-.158-.227-.103-.538.124-.696,1.422-.992,2.404-2.519,2.694-4.189.167-.955.126-1.904-.12-2.82-.058-.216-.229-.283-.3-.302-.069-.021-.243-.044-.39.105l-3.559,3.589c-1.035,1.037-2.718,1.038-3.754.002-.501-.501-.777-1.167-.777-1.877s.276-1.375.777-1.876l3.542-3.572c.149-.151.122-.326.103-.395-.019-.07-.087-.24-.299-.296-.917-.237-1.862-.271-2.813-.099-2.388.434-4.371,2.226-5.051,4.566-.077.265-.351.418-.62.341-.265-.077-.417-.354-.34-.62Zm1.329,11.553c.195.196.195.513,0,.708l-5.482,5.466c-.564.562-1.333.878-2.127.878-.997,0-1.791-.447-2.331-1.105-.964-1.175-.829-2.983.308-4.117l6.977-6.957c.196-.193.512-.194.707,0,.195.196.195.513,0,.708l-6.977,6.957c-.776.773-.882,1.992-.241,2.773.367.447.885.709,1.458.737.579.04,1.121-.185,1.521-.584l5.482-5.466c.195-.193.512-.194.707,0Z"/>
    </svg>
    
  },
  {
    id: 3,
    type: 'rayat',
    title: 'Raýat we raýat iş ýörediş kodeksi',
    icon: 
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M17,19.5c0,.276-.224,.5-.5,.5H7.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h9c.276,0,.5,.224,.5,.5Zm5-15v15c0,2.481-2.019,4.5-4.5,4.5H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5Zm-1,0c0-1.93-1.57-3.5-3.5-3.5H6.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5Zm-3.077,6c0,3.309-2.691,6-6,6s-6-2.691-6-6,2.691-6,6-6,6,2.691,6,6Zm-4.028-4.594c.58,.986,.956,2.424,1.018,4.094h1.984c-.184-1.841-1.37-3.391-3.003-4.094Zm.017,5.094h-3.978c.114,2.607,1.101,4.5,1.989,4.5s1.875-1.893,1.989-4.5Zm0-1c-.114-2.607-1.101-4.5-1.989-4.5s-1.875,1.893-1.989,4.5h3.978Zm-6.964,0h1.984c.063-1.671,.439-3.108,1.018-4.094-1.633,.704-2.819,2.254-3.003,4.094Zm3.003,5.094c-.58-.986-.956-2.424-1.018-4.094h-1.984c.184,1.841,1.37,3.391,3.003,4.094Zm6.947-4.094h-1.984c-.063,1.671-.439,3.108-1.018,4.094,1.633-.704,2.819-2.254,3.003-4.094Z"/></svg>
    
  },
  {
    id: 4,
    type: 'mashgala',
    title: 'Maşgala kodeksi',
    icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
    <path d="m18.5,5c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.122,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm4.874,18.154c-.474.537-1.157.846-1.874.846h-.5v3.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-3.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h3.5c.43,0,.84-.185,1.125-.508.285-.322.417-.752.364-1.178l-1.653-8.006c-.276-1.338-1.469-2.309-2.835-2.309-.618,0-1.208.192-1.706.556-.224.165-.535.113-.699-.108-.163-.223-.114-.536.109-.698.67-.49,1.464-.749,2.295-.749,1.838,0,3.442,1.307,3.814,3.106l1.66,8.045c.095.75-.125,1.466-.6,2.003Zm-11.374-9.154c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.122,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm1,5h-2c-1.654,0-3,1.346-3,3v3c0,1.304.836,2.415,2,2.828v3.672c0,.276.224.5.5.5s.5-.224.5-.5v-3.5h2v3.5c0,.276.224.5.5.5s.5-.224.5-.5v-3.672c1.164-.413,2-1.524,2-2.828v-3c0-1.654-1.346-3-3-3Zm2,6c0,1.103-.897,2-2,2h-2c-1.103,0-2-.897-2-2v-3c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v3ZM4.5,5c1.378,0,2.5-1.121,2.5-2.5S5.878,0,4.5,0s-2.5,1.121-2.5,2.5,1.122,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm2.933,6.151c-.139.238-.445.321-.683.183-.379-.219-.811-.334-1.25-.334h-2c-1.378,0-2.5,1.121-2.5,2.5v4c0,1.379,1.122,2.5,2.5,2.5h2c.276,0,.5.224.5.5s-.224.5-.5.5h-2c-.17,0-.337-.012-.5-.036v6.536c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-6.838c-1.181-.563-2-1.769-2-3.162v-4c0-1.93,1.57-3.5,3.5-3.5h2c.614,0,1.219.162,1.75.469.239.138.321.443.183.683Z"/>
  </svg>
  },
  {
    id: 5,
    type: 'administratiw_hb',
    title: 'Administratiw hukuk bozulmalary hakyndaky kodeks',
    icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
    <path d="m19.5,2h-1.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5H7V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-1.5C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-6c-1.93,0-3.5-1.57-3.5-3.5v-10.5h22v2.5c0,.276.224.5.5.5s.5-.224.5-.5v-5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,6H1v-1.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v1.5Zm-5,6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Zm0-5c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm2,10.582c-.613.269-1.289.418-2,.418s-1.387-.149-2-.418v-.582c0-1.103.897-2,2-2s2,.897,2,2v.582Zm1-.585c-.001-1.653-1.346-2.997-3-2.997s-2.998,1.344-3,2.997c-1.214-.913-2-2.365-2-3.997,0-2.757,2.243-5,5-5s5,2.243,5,5c0,1.632-.786,3.084-2,3.997Z"/>
  </svg>
  },
  {
    id: 6,
    type: 'TJK',
    title: 'Türkmenistanyň jenaýat we jenaýat iş ýörediş kodeksi',
    icon: <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 23.293-7.449-7.449c1.517-1.684 2.449-3.904 2.449-6.344 0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c2.439 0 4.66-.932 6.344-2.449l7.449 7.449zm-14.5-5.293c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm2.5-13.5c-.913 0-2 .52-2 3 0 .854.277 1.573.544 2.269.234.608.456 1.183.456 1.786v1.121c0 1.006.785 1.824 1.75 1.824s1.75-.818 1.75-1.824v-1.121c0-.689.131-1.165.259-1.624.119-.428.241-.871.241-1.431 0-3.888-2.693-4-3-4zm1.5 8.176c0 .455-.336.824-.75.824s-.75-.37-.75-.824c-.004-.053.007-1.127-.004-1.176h1.504s.002 1.123 0 1.176zm.295-3.012c-.07.253-.144.524-.201.836h-1.745c-.1-.377-.235-.738-.371-1.091-.246-.638-.478-1.241-.478-1.909 0-2 .727-2 1-2 .469 0 2 .216 2 3 0 .424-.095.767-.205 1.164zm-6.795-5.164c-.307 0-3 .112-3 4 0 .56.123 1.003.241 1.431.127.459.259.935.259 1.624v1.121c0 1.006.785 1.824 1.75 1.824s1.75-.818 1.75-1.824v-1.121c0-.603.221-1.178.456-1.786.268-.695.544-1.415.544-2.269 0-2.479-1.087-3-2-3zm0 8.176c0 .455-.336.824-.75.824s-.75-.37-.75-.824c-.002-.053.004-1.127-.003-1.176h1.507c-.012.048 0 1.123-.004 1.176zm.522-3.267c-.136.353-.271.714-.371 1.091h-1.745c-.057-.312-.131-.583-.201-.836-.11-.397-.205-.74-.205-1.164 0-2.784 1.531-3 2-3 .273 0 1 0 1 2 0 .668-.232 1.271-.478 1.909z"/></svg>
  },
  {
    id: 7,
    type: 'AS',
    title: 'Attestasiýa soraglary',
    icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,3.5v13.961c0,2.013-1.354,3.796-3.294,4.335l-7.12,1.981c-1.038,.288-2.135,.289-3.173,0l-7.12-1.981c-1.939-.54-3.293-2.322-3.293-4.335V4.5c-.01-.649,1.01-.649,1,0v12.961c0,1.565,1.053,2.952,2.562,3.372l7.121,1.981c.862,.24,1.773,.24,2.636,0l7.12-1.982c1.509-.419,2.562-1.806,2.562-3.372V3.5c-.01-.649,1.01-.649,1,0ZM3,15.911V3.5c0-1.108,.507-2.127,1.392-2.794C5.277,.039,6.396-.17,7.461,.134l3.225,.922c.538,.153,.993,.48,1.313,.908,.32-.428,.776-.755,1.313-.908l3.225-.922c1.066-.304,2.185-.096,3.069,.572,.885,.667,1.392,1.686,1.392,2.794V15.911c0,1.554-1.044,2.938-2.538,3.366l-5.609,1.603c-.558,.159-1.148,.159-1.706,0l-5.608-1.603c-1.495-.427-2.539-1.812-2.539-3.366ZM12.5,3.46V19.938c.026-.006,5.687-1.623,5.687-1.623,1.067-.305,1.813-1.293,1.813-2.404V3.5c0-.792-.362-1.519-.995-1.996-.634-.479-1.44-.625-2.192-.408l-3.225,.922c-.641,.183-1.088,.776-1.088,1.442ZM4,15.911c0,1.11,.746,2.099,1.813,2.404,0,0,5.661,1.617,5.687,1.623V3.46c0-.666-.447-1.259-1.088-1.442l-3.225-.922c-1.529-.489-3.236,.793-3.187,2.404V15.911Z"/></svg>
  },
]

export default categories