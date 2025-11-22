export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1>ArtiCare</h1>
          <p>Votre allié naturel contre les douleurs articulaires</p>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Retrouvez votre mobilité et votre confort</h2>
          <p>
            ArtiCare est un complément alimentaire formulé avec des ingrédients naturels
            scientifiquement prouvés pour soulager les douleurs osseuses et articulaires,
            améliorer la flexibilité et protéger vos articulations.
          </p>
          <a href="#order" className="cta-button">Commander maintenant</a>
        </div>
      </section>

      <section className="benefits">
        <h2>Les bienfaits d&apos;ArtiCare</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">💪</div>
            <h3>Réduit l&apos;inflammation</h3>
            <p>
              Diminue les inflammations articulaires et soulage les douleurs chroniques
              grâce à une formule anti-inflammatoire naturelle.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🦴</div>
            <h3>Renforce les os</h3>
            <p>
              Favorise la santé osseuse et la densité minérale pour des os plus solides
              et résistants au fil du temps.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🤸</div>
            <h3>Améliore la mobilité</h3>
            <p>
              Restaure la flexibilité articulaire et facilite les mouvements quotidiens
              pour une meilleure qualité de vie.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3>Protection du cartilage</h3>
            <p>
              Protège et régénère le cartilage articulaire pour prévenir la dégradation
              et maintenir des articulations saines.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌱</div>
            <h3>100% naturel</h3>
            <p>
              Formulé uniquement avec des ingrédients naturels de haute qualité,
              sans additifs artificiels ni produits chimiques nocifs.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Résultats rapides</h3>
            <p>
              Première amélioration ressentie dès 2-3 semaines d&apos;utilisation régulière
              avec des effets qui s&apos;intensifient dans le temps.
            </p>
          </div>
        </div>
      </section>

      <section className="ingredients">
        <h2>Ingrédients actifs</h2>
        <div className="ingredients-grid">
          <div className="ingredient-card">
            <h3>Glucosamine</h3>
            <p>
              Essentielle pour la formation et la réparation du cartilage. Aide à
              réduire les douleurs articulaires et améliore la fonction articulaire.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>Chondroïtine</h3>
            <p>
              Protège le cartilage existant et favorise sa régénération. Réduit
              l&apos;inflammation et améliore l&apos;absorption des chocs articulaires.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>Curcuma</h3>
            <p>
              Puissant anti-inflammatoire naturel qui soulage les douleurs et la raideur.
              Riche en curcumine, un antioxydant protecteur.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>MSM</h3>
            <p>
              Soufre organique qui aide à réduire l&apos;inflammation et à réparer les
              tissus conjonctifs. Améliore la flexibilité articulaire.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>Collagène Type II</h3>
            <p>
              Protéine structurelle essentielle pour les articulations. Améliore
              l&apos;élasticité et la résistance du cartilage.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>Vitamine D3</h3>
            <p>
              Cruciale pour l&apos;absorption du calcium et la santé osseuse. Renforce
              les os et soutient le système immunitaire.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>Boswellia</h3>
            <p>
              Extrait de plante aux propriétés anti-inflammatoires puissantes. Aide
              à réduire la douleur et améliorer la mobilité.
            </p>
          </div>
          <div className="ingredient-card">
            <h3>Oméga-3</h3>
            <p>
              Acides gras essentiels qui réduisent l&apos;inflammation systémique et
              protègent la santé cardiovasculaire et articulaire.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Ce que disent nos clients</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              &quot;Après seulement 3 semaines, mes douleurs au genou ont considérablement diminué.
              Je peux enfin refaire mes promenades quotidiennes sans souffrir !&quot;
            </p>
            <p className="testimonial-author">- Marie, 58 ans</p>
          </div>
          <div className="testimonial-card">
            <p>
              &quot;En tant que sportif, mes articulations étaient constamment sollicitées.
              ArtiCare m&apos;a permis de récupérer plus vite et de continuer à m&apos;entraîner
              sans douleur.&quot;
            </p>
            <p className="testimonial-author">- Thomas, 42 ans</p>
          </div>
          <div className="testimonial-card">
            <p>
              &quot;J&apos;avais essayé plusieurs produits sans résultats. Avec ArtiCare, la différence
              est réelle. Ma mobilité s&apos;est améliorée et je me sens plus active au quotidien.&quot;
            </p>
            <p className="testimonial-author">- Sophie, 65 ans</p>
          </div>
        </div>
      </section>

      <section id="order" className="cta-section">
        <h2>Commencez votre traitement dès aujourd&apos;hui</h2>
        <p>
          Profitez de notre offre spéciale : -30% sur votre première commande
        </p>
        <a href="#contact" className="cta-white-button">Commander maintenant</a>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 ArtiCare. Tous droits réservés.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            Les compléments alimentaires doivent être utilisés dans le cadre d&apos;un mode de vie sain
            et ne doivent pas être utilisés comme substituts d&apos;un régime alimentaire varié et équilibré.
          </p>
        </div>
      </footer>
    </>
  )
}
