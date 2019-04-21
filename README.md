<h1>React Props: Pokedex</h1>
          <p>
            This exercise lets you pratice using React components and
            properties.
          </p>
          <p>
            Create a pokemon application (a “pokedex”) that displays an
            interface that looks like this:
          </p>
          <div class="section" id="part-1-building-components">
            <h2>Part 1: Building Components</h2>
            <p>To create the pokedex, you should use 3 components:</p>
            <dl class="docutils">
              <dt>App</dt>
              <dd>
                <p class="first">This should just render a single Pokedex.</p>
                <p class="last">
                  (It’s common for the top-level app to not have direct logic in
                  it, but to render the top application object — this becomes
                  useful when you build sites that compose several different
                  parts together.)
                </p>
              </dd>
              <dt>Pokecard</dt>
              <dd>Shows a single Pokemon, with their name, image, and type.</dd>
              <dt>Pokedex</dt>
              <dd>
                Is provided, via props, an array of objects describing different
                pokemon, and renders a series of
                <cite>Pokecard</cite> components.
              </dd>
            </dl>
            <p>
              Use the defaultProps feature of <cite>Pokecard</cite> to provide a
              default list of Pokemon characters to show. You can use this list
              for a good set of defaults:
            </p>
            <div class="highlight-js notranslate">
              <div class="highlight">
                <pre><span></span><span class="p">[</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">4</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Charmander&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;fire&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">62</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">7</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Squirtle&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;water&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">63</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">11</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Metapod&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;bug&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">72</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">12</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Butterfree&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;flying&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">178</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">25</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Pikachu&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;electric&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">112</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">39</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Jigglypuff&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;normal&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">95</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">94</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Gengar&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;poison&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">225</span><span class="p">},</span>
  <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="mi">133</span><span class="p">,</span> <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;Eevee&#39;</span><span class="p">,</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;normal&#39;</span><span class="p">,</span> <span class="nx">base_experience</span><span class="o">:</span> <span class="mi">65</span><span class="p">}</span>
<span class="p">]</span>
</pre>
              </div>
            </div>
            <p>
              For each pokemon, their image source should be:
              <cite
                >https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png</cite
              >.
            </p>
          </div>
          <div class="section" id="further-study">
            <h2>Further Study</h2>
          </div>
          <div class="section" id="fancier-images">
            <h2>Fancier Images</h2>
            <p>
              Use this alternate source for nicer looking images:
              <cite
                >https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png</cite
              >
            </p>
            <p>
              Note that the pokemon id for these images must be padded with
              zeros to three places, like: 001, 002, 034, 199, etc. Try writing
              a function to take an id like 4 and turn it into 004.
            </p>
          </div>
          <div class="section" id="pokegame-component">
            <h2>Pokegame Component</h2>
            <p>
              Modify your component hierarchy so that <cite>App</cite> renders a
              component called <cite>Pokegame</cite>.
              <cite>Pokegame</cite> should take your list of 8 pokemon and
              randomly assign them into two hands of 4 cards each. It should
              then render two <cite>Pokedex</cite> components, one for each
              hand.
            </p>
            <p>
              Once you’ve got this working, modify your <cite>Pokegame</cite> so
              that it also calculates the total experience for each hand of
              pokemon. It should pass this total to the <cite>Pokedex</cite>.
            </p>
            <p>
              Next, have the <cite>Pokegame</cite> component determine which
              hand is the “winner,” where the winning hand is the one with the
              higher total experience. Then modify the
              <cite>Pokedex</cite> component one more time so that it accepts a
              prop of <cite>isWinner</cite>. If the <cite>Pokedex</cite> is the
              winning one, it should display the message “THIS HAND WINS!” at
              the bottom of the deck.
            </p>
            <p>
              Now when you load the page, you should see two different hands
              with a randomly changing winner every time you refresh.
            </p>
          </div>
          <div class="section" id="styling">
            <h2>Styling</h2>
            <p>
              Add styling to your components — perhaps you can do interesting
              things when hovering over a Pokecard, or have them smoothly
              transition into the page, all via CSS?
            </p>

</html>
