import transpileModules from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
};

export default transpileModules(['three'])(nextConfig);