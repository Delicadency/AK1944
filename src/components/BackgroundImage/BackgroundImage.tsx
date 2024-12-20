type BackgroundImageProps = {
  children: React.ReactNode;
};

const BackgroundImage = ({ children }: BackgroundImageProps) => {
  return (
    <div className="h-[960px] w-full bg-[url('/images/AK_bg_photo1.png')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
};

export default BackgroundImage;
