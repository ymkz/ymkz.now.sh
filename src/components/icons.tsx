type Props = {
  name: string
}

export function Icon({ name }: Props) {
  switch (name) {
    case 'Logo': {
      return (
        <svg
          focusable="false"
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M79.942,47.258c-1.995-1.468-4.618-2.231-7.792-2.267c-2.061-0.055-3.868,0.192-5.531,0.63 c-4.11,1.082-8.253,1.444-12.125,1.329c-5.175-0.168-10.581-0.92-16.053-1.599c-13.81-1.805-22.199,8.132-22.552,8.559 l2.809,2.391c0.072-0.09,7.424-8.814,19.287-7.258c5.593,0.692,11.109,1.456,16.393,1.626c4.149,0.129,8.606-0.243,13.163-1.444 c1.354-0.358,2.925-0.535,4.568-0.511c2.401,0.023,4.312,0.549,5.679,1.554c2.368,1.75,2.681,4.54,2.657,6.045 c-0.048,3.141-1.521,6.165-3.752,7.697c-1.262,0.87-2.905,1.329-4.748,1.329c-0.833-0.004-8.13-0.247-8.249-7.007l-3.664,0.062 c0.147,8.438,7.854,10.668,11.907,10.668c2.583,0,4.938-0.682,6.812-1.972c3.184-2.192,5.287-6.399,5.357-10.714 C84.172,52.583,82.65,49.259,79.942,47.258" />
          <path d="M36.445,39.001c5.134,0.462,10.491,1.721,15.624,2.152l0.608,0.053c3.207,0.28,6.839,0.598,10.172-0.876 c3.835-1.691,5.774-5.245,5.065-9.278c-0.667-3.78-3.93-7.781-8.752-8.096c-0.174-0.024-4.175-0.516-7.239,2.551l2.638,2.638 c1.737-1.732,4.033-1.497,4.232-1.478c3.026,0.202,5.032,2.685,5.445,5.034c0.193,1.099,0.3,3.803-2.895,5.214 C58.885,38,55.896,37.739,53,37.489l-0.615-0.053c-5.127-0.431-10.479-1.689-15.592-2.149 c-13.657-1.343-20.605,6.812-20.902,7.124l2.696,2.577C18.647,44.926,24.586,37.839,36.445,39.001" />
          <path d="M39.59,55.016c-12.228,0-19.387,6.815-19.688,7.109l2.643,2.562c0.062-0.059,6.347-6.041,17.046-6.041 c1.986,0,8.686,0.299,11.521,4.181c1.687,2.312,1.505,6.02-0.406,8.269c-1.779,2.084-4.898,2.888-7.771,1.987 c-1.543-0.486-2.55-1.689-3.082-3.684c-0.293-1.102-0.193-2.467,0.726-3.978c-1.107-0.611-2.216-1.219-3.325-1.826 c-1.393,1.832-1.539,4.753-1.018,6.709c0.854,3.206,2.772,5.359,5.55,6.231c1.191,0.372,2.399,0.552,3.586,0.552 c3.174,0,6.183-1.297,8.213-3.684c3.013-3.543,3.26-8.994,0.572-12.674C50.391,55.573,42.715,55.016,39.59,55.016" />
        </svg>
      )
    }
    case 'GitHub': {
      return (
        <svg focusable="false" width="24px" height="24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
          />
        </svg>
      )
    }
    case 'Twitter': {
      return (
        <svg focusable="false" width="24px" height="24px" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M0 0v16h16V0H0zm12.8 5.6v.3c0 3.3-2.5 7-7 7c-1.4 0-2.7-.4-3.8-1.1h.6c1.2 0 2.2-.4 3.1-1.1c-1.1 0-2-.7-2.3-1.7h.5c.2 0 .4 0 .6-.1c-1.1-.2-2-1.2-2-2.4c.3.2.7.3 1.1.3c-.7-.4-1.1-1.2-1.1-2c0-.5.1-.9.3-1.2C4 5.1 5.9 6 7.9 6.1c0-.2-.1-.4-.1-.6C7.8 4.1 8.9 3 10.3 3c.7 0 1.3.3 1.8.8c.6-.1 1.1-.3 1.6-.6c-.2.6-.6 1.1-1.1 1.4c.5-.1 1-.2 1.4-.4c-.3.6-.7 1-1.2 1.4z"
          ></path>
        </svg>
      )
    }
    case 'Facebook': {
      return (
        <svg focusable="false" width="24px" height="24px" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M0 0v16h16V0H0zm12.9 8.4h-2.1V14H8.7V8.4H7.2v-2h1.5V4.7c0-1.5.9-2.7 2.9-2.7c.8 0 1.4.1 1.4.1V4h-1.3c-.7 0-.8.3-.8.9v1.5H13l-.1 2z"
          ></path>
        </svg>
      )
    }
    case 'LinkedIn': {
      return (
        <svg
          focusable="false"
          width="24px"
          height="24px"
          viewBox="0 0 1200 1200"
        >
          <path
            fill="currentColor"
            d="M0 0v1200h1200V0H0zm294.287 235.913c47.53.535 94.35 33.325 96.387 90.088c1.016 50.475-42.971 88.921-97.632 90.088h-1.318c-47.057-.543-93.012-34.156-95.142-90.088c.671-49.913 42.627-88.904 97.705-90.088zM804.199 474.39c52.255.324 101.572 15.826 142.09 57.13c42.106 46.96 55.624 111.71 57.129 177.538v299.414H830.859V729.419c-.384-52.302-18.3-115.877-87.524-117.993c-40.571.432-69.18 24.007-88.77 63.428c-5.348 12.688-6.118 27.273-6.372 41.821v291.797H475.708c.66-145.877 1.567-291.743 1.245-437.622c0-41.438-.399-69.34-1.245-83.716h172.485v73.535c14.641-20.823 30.879-40.571 52.66-56.47c29.545-21.085 65.036-29.168 103.346-29.809zm-597.436 12.744h172.485v521.338H206.763V487.134z"
          ></path>
        </svg>
      )
    }
    default: {
      return null
    }
  }
}
