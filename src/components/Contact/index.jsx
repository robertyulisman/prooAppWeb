import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const { proo } = useSelector((state) => state.landingPage);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (proo.length !== 0) {
      setData(proo);
    }
  }, [proo]);
  return (
    <div className="contact-wrapper mt-16" id="contact">
      <div className="card-headers mb-5 text-center">
        <p className="text-3xl font-extrabold title mb-3">Ada Pertanyaan ?</p>
        <p className="description text-gray-500">
          Untuk pertanyaan lebih lanjut, silahkan hubungi kami. <br /> Atau
          langsung datang ke kantor kami.
        </p>
      </div>
      <div className="card-body">
        <div className="container flex flex-col justify-center p-4 lg:-mt-12 lg:px-28 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-2xl font-extrabold leading-none sm:text-2xl mb-8 ml-4">
              Alamat Lengkap
            </p>

            <div className="detail-address flex flex-col space-y-4">
              <span className="flex flex-row">
                <div className="w-16  h-16">
                  <img
                    className="w-8  h-auto m-auto"
                    src="assets/pin2.png"
                    alt=""
                  />
                </div>
                <p className="w-full">{data?.alamat}</p>
              </span>
              <span className="flex flex-row">
                <div className="w-16  h-16">
                  <img
                    className="w-8  h-auto m-auto"
                    src="assets/message.png"
                    alt=""
                  />
                </div>
                <p className="w-full">{data?.email}</p>
              </span>
              <span className="flex flex-row">
                <div className="w-16  h-16">
                  <img
                    className="w-8  h-auto m-auto"
                    src="assets/info.png"
                    alt=""
                  />
                </div>
                <p className="w-full">{data?.web}</p>
              </span>
            </div>
          </div>
          <div className="flex bg-white flex-col p-6 pl-14 pr-14 lg:max-w-md xl:max-w-lg lg:text-left rounded-2xl shadow-md space-y-10 lg:w-2/3">
            <form action="" method="post">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="nama" className="text-sm mb-2">
                  Nama *
                </label>
                <input
                  id="nama"
                  type="text"
                  placeholder="masukkan data . . ."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-100 p-2 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3 mt-3">
                <label htmlFor="email" className="text-sm mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="masukkan email . . ."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-100 p-2 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3 mt-3 mb-8">
                <label htmlFor="pesan" className="text-sm mb-2">
                  Pesan *
                </label>
                <textarea
                  id="pesan"
                  type="text"
                  placeholder="masukkan pertanyaan . . ."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-slate-100 p-2 focus:ring-violet-400 border-gray-700 text-gray-900 h-32"
                  maxLength="200"
                />
              </div>
              <a
                href="#"
                className="shadow-lg px-12 py-2 text-lg font-bold rounded bg-green-500 text-white float-right"
              >
                Kirim
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
