  import React from 'react';

  const cyberPrizeData = {
    title: 'Дарим кибер-призы',
    subtitle: 'Вот так ачивка!',
    description: 'Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite.',
    bonus: 'А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
    buttonText: 'Посмотреть',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/3204/b54f/49c89a092270f6e427b8377896808ec1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baL~L689hH4T35i8EUn4ia7JFETIsCwYaeA1TbBlpZdIrHvdEOPAdrT1Ye5Pzpnzc911Vty4yuT~MYQ8ntzWjVSdgGl4~DXbNYx1mmNTefjbgFZdrWxDPCicDHog7Vx3VtwLKhpNzHPfz~nslcOLRsk7PkXD7qrZx7aOhR14bdRBQhgPbPSn0JqlooNvoeteyfQBZz9BPQtwS8Wo7wr8mB7riMZyfsVmSVR-JDS14~9y83c7OQNzSVIaTQVEH-RDXjLRY3pDr7TyzzrqePutbDDxIDE7N0gevWTjCP9x9gBpGfQiU1uR9VBVsHl6EyM6LTUis~DQ79zpX4vyXaseYw__',
  };

  const CyberPrizeCard = () => {
    return (
      <div className=''>
      <div className='flex container mx-auto'>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
            <img src={cyberPrizeData.imageUrl} alt="" className="w-32 mx-auto mb-4" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
            <img src="https://s3-alpha-sig.figma.com/img/184e/d8fc/a1622eeecddc0920ae76bc8116af3ffd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOr2gX1iKP6sLOF5xuOnn001BpyIXBm2g1M42SnQ5CM2uqa1OolRi4GY2NZzLC0IflCL7gJwtVNB-hixZJvKlRsq5v6XPtXv2Et1fiaUXzrSItSQv37jwMbwM5j7F0nsdNxFKP4c8eIAzvhSQ4zbJvu7F6dE18lUwDrzkZjTBjwwGxRb0yHqbzM2eZCRSCqq7pIVg5LQHSRaL3U8grC8jBCTP9KglguKzhGDp5ayT9n27u7ErZsiCucakk4J0SsRPFzI16~3JsNOajBBLuF4CfIvGzefNvJEUhNOpsCHFY9V-KKitL2nplK1RGsniRdjHN68kFEJJLBaMrrt11nDXw__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
            <img src="https://s3-alpha-sig.figma.com/img/e1cc/7ed1/73a8fbf52d3ac25696bda763069983a2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHKSEtctzjpFeZF8vGN~nBR5XKbCtHXh6P9ArFtCN9CqN4fxiIwb8japWbPiJFv8XEs2eFoNJAZvJqNdF8ya7ZfNwmV10N73Aoky89H2FAk9aEOj1~~r-zB-zBdDkf1EXnDnm3iX165Sjjfntz~wAspuMIjk9uBYXEcGvdNZHiW2P6sywaN6Y3n47s1bgxMHJfPYItEk77EP67UKj-FGg5mwHFTt7SaQjhWi0MM1hRUzCtZeB2V10pA29JgyfoXozROEDps3lSACMdVcHBUgWfAKaF9HzqCJC1L4bd940pgSLsZ3qgLrl6zN0uW8K~XYf5e67NtBJYeY3VGj-HKi-A__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>

      </div>

       <div className='flex'>
       <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
           <img src="https://s3-alpha-sig.figma.com/img/0db4/0f9e/39dea3f8956408676cecfcefd18e68c6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apxS94LVP0lCGYns4s99TIzLzZg9Eltk0Kl7naAVxvd4YrGzTp9hvivFtaCbGrCp1J9Cxxa1EFJ8VfUDGkHV-wj8Yb~z7PFrV~4z9TpcuVjD~kx1fKnweFUAWUEtUBNoAqXqIGtLZGa-JXX1GH6vd~LH3O0zJC3RWz5VdbBr4jB9wUYqOUivxkLlWMGJJ-~Q99XDmkXcnXL9Eh6J0qmBNGy1JCDbW67nNCyHXiDYKzoBFTZWK6gSKGWZRAdIQYSN7rwxQ-doROmPoHoNTsqI2k8EijyucbGf1LDvNDlfElJDpNj0iRssUnSIHYPT10lCQKKsV2nEejrBZ4go-OJe-A__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>


        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
           <img src="https://s3-alpha-sig.figma.com/img/85ca/3cd3/7f69debf97f78ef1de7ca15383762021?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rjwi9j5CUZpzODliC1tb3xM-0Qh9wgXUrX6L-o8zrj8HQcrU1KFPHdIbaiBI22olFIGVpSnA9NtGFzXqLl115dMdAcHkAxZDcwkKnMq3dZPldihIcSiMEsBSCsJtv-Fubek4D0bEvss9BUxvTUY6NJiB3gL3fvYT4D-OqXcL6Gr~1-X5J6GIPfpgfuBI6ttxXO0vf6lLdKstMPVA8pRsXuRFI1Klc2NSLb59wZvqX5vMEKyfihNKqwd6XmTU-IY0BGjaDFR3Ac5Qs~~lvwslzLmtTNcnmmZA9ydFLXJvJP-HZ-6bqf6t-kv4YV1P4qFUbNGLFSw1qPmq56AckxG4zw__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
           <img src="https://s3-alpha-sig.figma.com/img/85ca/3cd3/7f69debf97f78ef1de7ca15383762021?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rjwi9j5CUZpzODliC1tb3xM-0Qh9wgXUrX6L-o8zrj8HQcrU1KFPHdIbaiBI22olFIGVpSnA9NtGFzXqLl115dMdAcHkAxZDcwkKnMq3dZPldihIcSiMEsBSCsJtv-Fubek4D0bEvss9BUxvTUY6NJiB3gL3fvYT4D-OqXcL6Gr~1-X5J6GIPfpgfuBI6ttxXO0vf6lLdKstMPVA8pRsXuRFI1Klc2NSLb59wZvqX5vMEKyfihNKqwd6XmTU-IY0BGjaDFR3Ac5Qs~~lvwslzLmtTNcnmmZA9ydFLXJvJP-HZ-6bqf6t-kv4YV1P4qFUbNGLFSw1qPmq56AckxG4zw__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>
       </div>

      <div className='flex'>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
            <img src="https://s3-alpha-sig.figma.com/img/1129/c4b5/1f31594f324985a4fda4f3daa6d84d2d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMTWtt4S~htQqS76cW4Ei38rVSZJ6mTel6kQhOtDfh4UybhQbwM6kFut2YxVmeyHjCIcqfyiVVyHSL-oUQJKF-B2v7b71ssk47FnqMt13Knvf1toQhQEVi-wc4dhLSkrC4pT4yePaAmCkrJN-ecT3A1vxYFv5HiCI4i-wQziR~lJzTqA1wmmeIRueRH6rr7MwekBZj~GjmBNZIbuO80E94T3FLjSNrJykPz6DhMiTxnIQLYP78GPWjNz-jb4qDurx84mvkLITnJZbOu5Vsa8w2oPvQpMT3sfDMfNdaGAjLU6GvSLXAPA3OsUNichTlQTJDqM8nkJ~NDf9vreJF~DPA__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>


        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
           <img src="https://s3-alpha-sig.figma.com/img/9404/e274/aca6a24286ede5a167ef66be10ce59ec?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EOct~fVh35elUyFM0ioOwnpm5jUoeC3CcAIbdP0stIbbOnbuokxiPYpZjq~R~W0MhLNCb8RNf5ZPSmJcybiOrURSQQ9W-Se5ulV8ATAfX8qWU~j62U4MJuJZATTwqxNYdhRwIkrF~WOlEE9Q2eo2XpY-2LjG-9E4ks6qd-7a-7f-sB7Mp9Z-4bz4I5JJo~nn5mBmPyKXsmNo5XsjQkuJZQInBUOYjPesqtdloj03oqkb3NbtfSqLp693SQbIX~Nr82FIshiEmLf6A9oSoZ6CYcgzeCMdPnp-wRu5f8SzTiW8vYtSvbpn7TeyC9C8Bn8EAuFhOSPGB7aq9A5HoZD2zw__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>



        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
           <img src="https://s3-alpha-sig.figma.com/img/4fad/9590/ac0f63e72678200a40f20c9df58ab01f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cd2d7nojwwtJAEsnp1Cri-zhd8tll73gjyvysCHEeq11BRYFgZ~zZMw9MUT8rXZsKhLQ7MZ55zc18zOCviQd90CV9tEMotZpjOdMYf9H9wi8qYEcxcqSkjhUSB8o-1rE8ry~69AYpBU18n~FRe4lv~~APPNu10BCHGs8BzRIiQzKus17upKOJqmOijM2NFs1iWkyFLGWcsCqvdjwRk6siBuKPM8KrCgI7agsrphTIdb-0B7Ayc6pEfPbUaKbIt7-cdAQEFsnBrOo-xAdyeG7C1oSPZTo4Kd0NzY8COZi-bJg~9OABv-Y2v1CSOQDmXdO99uNfuM20BAks8XUwRv90w__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>
      </div>

        <div className='flex'>
        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
          <img src="https://s3-alpha-sig.figma.com/img/9d69/66e5/b7ff05ef222df285582dbbcd151e58ad?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXV7jveumxk~jFZ29arWyyMvqla83k4yfST99lJlLOgAb~MhzE1QK~ZdhlR~18AuxivLFQmLSAwd0gAVZ1hUBEJSUp71k1cJC~SP3wvhJECbZQVyGmTFXwO2-uaXmcrcVphKj8GsKkbgWUazMfulrA63g2FeCFlicm9swrKGHC1520KMg1NpeXypp5~ZEb~h9Yd~5z03By8mI6w-KTtewkZ6KGi9TfcplOLmA-euPor0L0U-bm4QvTNhiq2LWarv4kOAV5B~FVT4cJ~9b-fUWltO-PnORyQy5-TYiDrc0iPlSl0FQZEauHOuCN~od4tvsnIA11yKHjdO2oL3H9Tksw__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>



        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
           <img src="https://s3-alpha-sig.figma.com/img/7103/0e8b/82a3c805672fc5b518d32a68f93a02b4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYYMBdsVttzkvBB0WAlHlzqLAVqJwTxfkJxkpQNdB3hqeDAyNcMggNIS~v7lerxXp24lDUwY4HRCi12NEZ6DzgwoORKqyTj3Sf6UIPn4IOwbIJ4o90oSPINXpZOAKCBN1xWKhNLk9EfcM~RAkqe8xvPUKiPAXZRT6uBTh6PEBVb9QjGHVFXYDI2J5PKw8mYNJEa5KS1H1VpuoQ-MyUF7m5SyGYeXJu2K32ydXWv1-P1UuCoxXJPnXRd6r9XPZvDMp1w7XXcq4i9F835d8zKlW2OyDWSEGBjFP9VNuEP2JlDRW-LKmYPI~WX8Z4SFHOqpMMCKoFRnlU6k7zlLuMoNag__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>



        <div className="bg-white shadow-md rounded-lg p-8 max-w-xs mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{cyberPrizeData.title}</h2>
            <p className="text-gray-600">{cyberPrizeData.subtitle}</p>
          </div>
          <div className="text-center mb-4">
          <img src="https://s3-alpha-sig.figma.com/img/70ab/44b2/59f14260e55463e8ec70bda7b08c3955?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gXk-WHqCDawyRkUZi~SYPvQJyb1krhzAR6wtEY8YnAVhoTiChnTU3KQiZNbCvAh6h1Ls5HbTeZ8gvUkCVmy0XKhAftCdaiosrbpCqjLtELb1YXLO-MjvpLaKy~PrXjZL31-UdznxDOzCDfBWynA6NLaBRLbrHOxV0C6Zh965hKun277cRUH4gYS-g4Za9gXV-t11qsdnf9S~~Fy0SnikFuHx0UFilW1Ky8eF5BH~feD3WSmZjzevJ568Xp2I3bMk45vxsGtlCXCiN4DqS--XwXXsmxGaRAqhhbxGbsunIxVazwVpYcu8wQbPrNNuuzcvnOjGrPk0z-FHy6vyJbpKbA__" alt="" />
            <p className="text-gray-600">{cyberPrizeData.description}</p>
            <p className="text-gray-600">{cyberPrizeData.bonus}</p>
          </div>
          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {cyberPrizeData.buttonText}
            </button>
          </div>
        </div>

        </div>
      </div>
    );
  };

  export default CyberPrizeCard;
