import Head from 'next/head';

import _JSXStyle from 'styled-jsx/style';

import ComboiPerCrear from '../components/ComboiPerCrear';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <ComboiPerCrear />
      </Layout>

      <style jsx>{`
        .pa {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
