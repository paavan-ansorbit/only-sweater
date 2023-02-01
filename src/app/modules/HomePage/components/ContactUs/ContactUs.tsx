import React from "react";

export interface ContactUsProps {}

export const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mt-40"
    >
      <div className=" text-3xl">Contact</div>
      <div className=" w-2/5">
        <form>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-1 gap-4">
              <div className="flex flex-col text-gray-500 flex-1">
                <label htmlFor="姓">姓 </label>
                <input
                  type="text"
                  id="姓"
                  placeholder="例）太郎"
                  className="border border-gray-400 rounded py-2 px-1"
                />
              </div>
              <div className="flex flex-col text-gray-500 flex-1">
                <label htmlFor="姓">姓 </label>
                <input
                  type="text"
                  id="姓"
                  placeholder="例）太郎"
                  className="border border-gray-400 rounded py-2 px-1"
                />
              </div>
            </div>
            <div className="flex flex-col text-gray-500">
              <label htmlFor="メールアドレス">メールアドレス </label>
              <input
                type="email"
                id="メールアドレス"
                placeholder="例）yamada@email.com"
                className="border border-gray-400 rounded py-2 px-1"
              />
            </div>
            <div className="flex flex-col text-gray-500">
              <label htmlFor="お問合せ内容">お問合せ内容</label>

              <textarea
                id="お問合せ内容"
                rows={5}
                className="border border-gray-400 rounded py-2 px-1"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="herosection_bg text-white px-8 py-2 rounded-md">
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
