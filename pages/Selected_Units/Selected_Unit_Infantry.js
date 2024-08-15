import Head from 'next/head';
import styles from '../../styles/Home.module.css'; // Adjust path as needed


const unitSelectionCavalry = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Select a Unit
        </h1>
        <div className={styles.grid}>
          
          <a href="/Selected_Units/Selected_Infantry_Nation/Grenadiers/Nation" className={styles.card}>
            <h3>Grenadiers &rarr;</h3>
          </a>

          <a href="/Selected_Units/Selected_Infantry_Nation/Light/Nation" className={styles.card}>
            <h3>Light Infantry &rarr;</h3>
          </a>

          <a href="/Selected_Units/Selected_Infantry_Nation/Line/Nation" className={styles.card}>
            <h3>Line Infantry &rarr;</h3>
          </a>

          <a href="/Selected_Units/Selected_Infantry_Nation/Militia/Nation" className={styles.card}>
            <h3>Militia &rarr;</h3>
          </a>  

          <a href="/Selected_Units/Selected_Infantry_Nation/Skirmishers/Nation" className={styles.card}>
            <h3>Skirmishers &rarr;</h3>
          </a>  

        </div>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default unitSelectionCavalry;
