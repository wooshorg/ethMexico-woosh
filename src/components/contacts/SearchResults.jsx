import Button from '../global/Button';

const SearchResults = (props) => {
  const results = [
    { user: 'user', wallet: 'wallet' },
    { user: 'user2', wallet: 'wallet' },
    { user: 'user3', wallet: 'wallet' },
  ];
  return (
    <div>
      <h2 className="mb-6">Results ({results.length})</h2>
      <div className={`flex gap-6 flex-col`}>
        {results.map((r, i) => (
          <div
            className="flex items-center justify-between gap-4 py-2 px-4"
            key={i}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white rounded-full" />
              <div className="flex flex-col">
                <span>{r.user}</span>
                <span className="text-sm text-white/70">{r.wallet}</span>
              </div>
            </div>
            {props.addContact && <Button size="sm">Send request</Button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
