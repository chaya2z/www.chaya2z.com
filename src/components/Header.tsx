function Header({ title }: { title: string }) {
  return (
    <header>
      <div className="flex justify-center p-6 mb-8 bg-gray-200">
        <div className="container max-w-3xl">
          <h1 className="text-3xl">{title}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
