/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // SVG 파일을 위한 로더 설정
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // mp3 파일을 위한 로더 설정
    config.module.rules.push({
      test: /\.mp3$/, // mp3 파일을 찾음
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds', // Next.js에서의 파일 경로
          outputPath: 'static/sounds', // 실제 빌드 시 파일 저장 경로
          name: '[name].[hash].[ext]', // 파일명 형식 설정 (해시 포함)
        },
      },
    });

    return config;
  },
};

export default nextConfig;
