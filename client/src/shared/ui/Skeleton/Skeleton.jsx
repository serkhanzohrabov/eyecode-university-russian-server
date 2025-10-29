  export  default function Skeleton() {
  return (
    <div
      style={{
        width: 150,
        height: 150,
        background: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
        backgroundSize: '200% 100%',
        borderRadius: 18,
        animation: 'loading 1.5s infinite'
      }}
    />
  );
}