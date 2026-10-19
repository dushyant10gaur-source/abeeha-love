import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="floating-decor" aria-hidden="true">
    <span>♡</span>
    <span>✿</span>
    <span>♡</span>
    <span>🌷</span>
    <span>♡</span>
    <span>✧</span>
    <span>♡</span>
  </div>

  <nav class="navbar">
    <a href="#home" class="brand">memory lane <span>♡</span></a>

    <div class="nav-links">
      <a href="#our-story">Our Story</a>
      <a href="#her-voice">Her Voice</a>
      <a href="#my-love">My Love</a>
    </div>

    <a href="#final-letter" class="nav-heart">for you ♡</a>
  </nav>

  <main>

    <!-- HERO -->

    <section class="hero section" id="home">
      <div class="hero-flower flower-left">🌷</div>
      <div class="hero-flower flower-right">🌸</div>

      <div class="eyebrow">
        <span class="eyebrow-dot"></span>
        A LITTLE UNIVERSE MADE FOR YOU
        <span class="eyebrow-dot"></span>
      </div>

      <h1>
        For the girl who<br />
        feels like <em>home.</em>
      </h1>

      <p class="hero-subtitle">
        Hey, jaan. ♡
      </p>

      <p class="hero-description">
        I made this little corner of the internet for you.
        For our memories, your voice, your little habits,
        and all the things my heart wishes it could tell you
        while holding your hand.
      </p>

      <button class="primary-button" id="begin">
        Enter our little world <span>♡</span>
      </button>

      <div class="hero-bottom">
        <span>made with a little love</span>
        <span>and a whole lot of missing you</span>
      </div>

      <div class="hero-moon">☾</div>
    </section>


    <!-- A LITTLE NOTE -->

    <section class="intro section" id="intro">
      <div class="section-label">01 — A LITTLE NOTE</div>

      <div class="intro-card">
        <span class="tiny-flower">✿</span>

        <h2>Jaan, this is <em>yours.</em></h2>

        <p>
          You know what's funny? I started with a website,
          but somehow I ended up trying to put my entire heart
          into a screen.
        </p>

        <p>
          I wanted a place where I could keep little pieces of us.
          The memories, the silly moments, the things you made for me,
          your voice notes, and all those feelings I can't always
          explain properly.
        </p>

        <p>
          So whenever the distance feels a little too much,
          I hope this place reminds you that somewhere,
          there's a boy who is incredibly grateful that he met you.
        </p>

        <div class="signature">always your person ♡</div>
      </div>
    </section>


    <!-- OUR ANNIVERSARY -->

    <section class="anniversary section" id="our-story">
      <div class="section-label">02 — A DAY I KEEP CLOSE</div>

      <div class="anniversary-heading">
        <span class="date-flower">🌷</span>

        <p class="mini-label">THE DAY OUR STORY MEANT EVEN MORE</p>

        <h2>16 September <em>♡</em></h2>

        <p class="anniversary-subtitle">
          Our first anniversary. A memory I keep replaying.
        </p>
      </div>

      <div class="memory-grid">
        <article class="memory-card memory-card-large">
          <div class="memory-icon">💌</div>
          <span class="card-number">MEMORY 01</span>

          <h3>You made something for me.</h3>

          <p>
            On our first anniversary, you sent me little websites
            you had made for me. Two or three little worlds,
            created by you, with your own effort and love.
          </p>

          <p>
            Maybe someone else would see them as just websites.
            But I saw something else: you taking time out of your day
            to make something special for me.
          </p>

          <p>
            And honestly, jaan, that meant so much more than
            I could ever explain.
          </p>
        </article>

        <article class="memory-card">
          <div class="memory-icon">🎙️</div>
          <span class="card-number">MEMORY 02</span>

          <h3>Your little voice notes.</h3>

          <p>
            The little I-love-you messages, your sweet words,
            and the moments when you tell me things in your own voice.
          </p>

          <p>
            I don't just remember what you say.
            I remember how it feels to hear you.
          </p>
        </article>

        <article class="memory-card">
          <div class="memory-icon">🫂</div>
          <span class="card-number">MEMORY 03</span>

          <h3>Something I can return to.</h3>

          <p>
            I saved those recordings because sometimes I miss you
            so much that I don't know what to do with the feeling.
          </p>

          <p>
            So I listen again. And for a little while,
            the distance feels less distant.
          </p>
        </article>
      </div>

      <div class="quote-strip">
        "You made little websites for me.
        I made this little world to keep you close."
        <span>— with love, always ♡</span>
      </div>
    </section>


    <!-- HER VOICE -->

    <section class="voice-section section" id="her-voice">
      <div class="section-label">03 — HER VOICE, MY COMFORT</div>

      <div class="voice-heading">
        <div class="voice-icon">🎧</div>

        <h2>If I miss you,<br /><em>I press play.</em></h2>

        <p>
          There are things I wish I could keep forever.
          Your voice is one of them.
        </p>
      </div>

      <div class="voice-letter">
        <span class="quote-mark">“</span>

        <p>
          Jaan, do you know why I love those voice notes so much?
        </p>

        <p>
          Because they are not just recordings to me.
          They are little pieces of a moment when you were there,
          talking to me, saying sweet things, telling me you love me,
          and letting me hear the voice I wish I could listen to
          while sitting beside you.
        </p>

        <p>
          Sometimes I miss you too much.
          And when that happens, I go back to those recordings.
          I listen to your words again, and again.
          Not because I have forgotten them,
          but because hearing them makes me feel close to you.
        </p>

        <p>
          You might have recorded them without thinking they would
          become this important to me. But they did, jaan.
          They really did.
        </p>

        <p>
          I can't hold your hand through a recording.
          I can't hug you through a screen.
          But your voice gives my heart something to hold on to
          until I can be there with you.
        </p>

        <p class="voice-ending">
          If I could keep one little piece of a moment with you,
          I'd keep the sound of your voice saying something sweet
          and the feeling it leaves in my heart. ♡
        </p>
      </div>

      <div class="audio-area">
        <div class="audio-area-heading">
          <span>♡</span>
          <h3>Little pieces of you</h3>
          <p>
            Add your saved voice recordings here.
            This little collection is just for us.
          </p>
        </div>

        <div class="audio-list">

          <div class="audio-card">
            <div class="audio-card-icon">🎙️</div>
            <div class="audio-card-content">
              <h4>Your little I-love-you</h4>
              <p>A voice note I never want to forget.</p>
              <audio controls preload="none">
                <source src="./audio/voice1.mp3" type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </div>
          </div>

          <div class="audio-card">
            <div class="audio-card-icon">💗</div>
            <div class="audio-card-content">
              <h4>Your sweet words</h4>
              <p>One of those recordings I replay when I miss her.</p>
              <audio controls preload="none">
                <source src="./audio/voice2.mp3" type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </div>
          </div>

          <div class="audio-card">
            <div class="audio-card-icon">🌙</div>
            <div class="audio-card-content">
              <h4>My little comfort</h4>
              <p>For the days when the distance feels too big.</p>
              <audio controls preload="none">
                <source src="./audio/voice3.mp3" type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </div>
          </div>

        </div>

        <p class="audio-note">
          ♡ These are placeholders until you add your actual recordings.
        </p>
      </div>
    </section>


    <!-- THE LITTLE THINGS -->

    <section class="little-things section" id="little-things">
      <div class="section-label">04 — THINGS I NOTICE ABOUT YOU</div>

      <h2>It's the little things,<br /><em>jaan.</em></h2>

      <p class="section-description">
        Maybe I don't always say it, but I notice more than you think.
      </p>

      <div class="little-grid">

        <article class="little-card">
          <span class="little-emoji">🎙️</span>
          <h3>Your voice notes</h3>

          <p>
            Especially when you forget what you were saying,
            stop the recording, listen to it again,
            and continue. 😭
          </p>

          <p class="little-highlight">
            I find those tiny habits adorable.
          </p>
        </article>

        <article class="little-card">
          <span class="little-emoji">🌷</span>
          <h3>Your favourite things</h3>

          <p>
            Flowers, cats, the moon, mountains, and all the little
            things that make your world feel like yours.
          </p>

          <p class="little-highlight">
            I want to understand the things you love.
          </p>
        </article>

        <article class="little-card">
          <span class="little-emoji">💌</span>
          <h3>The way you share</h3>

          <p>
            You tell me things. You send me things.
            You let me into little parts of your day.
            I never want to take that for granted.
          </p>

          <p class="little-highlight">
            Thank you for letting me know your world.
          </p>
        </article>

        <article class="little-card">
          <span class="little-emoji">🫶</span>
          <h3>The way I feel with you</h3>

          <p>
            I don't have to pretend to be someone else.
            I can be silly, emotional, quiet, dramatic,
            or completely random.
          </p>

          <p class="little-highlight">
            With you, I can just be me.
          </p>
        </article>

      </div>

      <div class="little-things-bottom">
        I don't just love you in the big moments.
        I love you in the tiny details, too. ♡
      </div>
    </section>


    <!-- MY COMFORT ZONE -->

    <section class="comfort-section section">
      <div class="comfort-visual">
        <div class="moon-glow"></div>
        <div class="moon-symbol">☾</div>
        <div class="comfort-stars">✦　⋆　✧　⋆　✦</div>

        <div class="mountain mountain-back"></div>
        <div class="mountain mountain-front"></div>

        <div class="comfort-caption">
          somewhere under the same sky
        </div>
      </div>

      <div class="comfort-copy">
        <div class="section-label">05 — MY COMFORT ZONE</div>

        <h2>
          You feel like<br />
          <em>home to me.</em>
        </h2>

        <p>
          Jaan, home isn't always a place.
          Sometimes, it's a person who makes you feel safe
          enough to stop pretending.
        </p>

        <p>
          With you, I don't feel like I have to act cool all the time.
          I don't have to hide every emotion or pretend that nothing
          hurts me. I can be childish, I can be serious,
          I can talk nonsense, and I can tell you when I miss you.
        </p>

        <p>
          I can be the version of myself that the rest of the world
          doesn't always get to see.
        </p>

        <p>
          That's what you mean to me.
          Not just a girl I love, but someone with whom
          I can feel like myself.
        </p>

        <p class="comfort-highlight">
          You're not just someone I want to talk to.
          You're someone I feel comfortable being real with.
        </p>

        <span class="signature">you feel like home, jaan ♡</span>
      </div>
    </section>


    <!-- IF I COULD BE THERE -->

    <section class="miss-you section" id="miss-you">
      <div class="section-label">06 — IF I COULD BE THERE</div>

      <div class="miss-you-content">
        <span class="miss-you-icon">🫂</span>

        <h2>
          I don't just miss<br />
          <em>talking to you.</em>
        </h2>

        <p>
          I miss the things distance doesn't let me do.
        </p>

        <div class="miss-you-lines">
          <p>I want to hug you without a screen between us.</p>
          <p>I want to sit beside you without watching the clock.</p>
          <p>I want to hear your voice without pressing play.</p>
          <p>I want to look at you and know you're really there.</p>
          <p>I want ordinary moments with you.</p>
        </div>

        <p class="miss-you-ending">
          Not every moment has to be extraordinary.
          I think I'd be happy doing the most ordinary things
          as long as I could share them with you.
        </p>

        <div class="handwritten">one day, a real hug. no distance. ♡</div>
      </div>
    </section>


    <!-- ONCE IN A LIFETIME -->

    <section class="my-love section" id="my-love">
      <div class="section-label">07 — SOMETHING I NEED YOU TO KNOW</div>

      <div class="love-card">
        <div class="love-card-top">
          <span>♡</span>
          <span>FOR MY FAVOURITE PERSON</span>
          <span>♡</span>
        </div>

        <h2>
          A kind of love<br />
          <em>that happens once.</em>
        </h2>

        <p>
          Jaan, there's something I've been trying to put into words.
          And I hope you understand what I mean.
        </p>

        <p>
          The way I am with you is not something I experience
          with just anybody. The way I talk to you, the way I act,
          the way I share my thoughts, the way I become soft,
          childish, emotional, and completely myself around you...
          it feels different because it's you.
        </p>

        <p>
          You are my comfort zone.
          You are the person with whom I don't feel the need
          to perform, impress, or pretend to be someone I'm not.
          I can let my guard down.
          I can just exist as myself.
        </p>

        <p>
          And that's precious to me, because I don't want to treat
          what we have like something ordinary.
        </p>

        <p>
          I don't want to make promises just to make a moment sound
          beautiful. I want my feelings to show in the way I treat you,
          the way I listen to you, the way I remember little things,
          and the way I keep choosing to care.
        </p>

        <p>
          Maybe I'll never find perfect words for what you mean to me.
          But I know this: the version of me that you get to know,
          the way I open up to you, and the place you've made
          in my heart are deeply personal.
        </p>

        <p>
          I don't want to recreate this feeling with someone else.
          I don't want to take the little world we've built
          and pretend it could simply be replaced.
          What we have is ours, and I want to treat it that way.
        </p>

        <p class="love-card-emphasis">
          I don't just want to love you for a beautiful moment.
          I want to keep learning how to love you through all
          the ordinary days that come after it.
        </p>

        <p>
          You are not important to me because you're perfect.
          You're important because you're you.
          And with you, my heart has found a kind of comfort
          I don't want to take for granted.
        </p>

        <div class="love-card-signature">
          <span>With all my heart,</span>
          <strong>your jaan ♡</strong>
        </div>
      </div>
    </section>


    <!-- FLOWERS AND CATS -->

    <section class="garden section" id="garden">
      <div class="section-label">08 — A LITTLE GARDEN FOR YOU</div>

      <h2>
        Flowers for you.<br />
        <em>Little smiles for us.</em>
      </h2>

      <p class="section-description">
        Since I can't always bring you real flowers,
        here's a little digital garden.
      </p>

      <div class="flower-garden">
        <button class="flower-button" data-flower="🌷" aria-label="A tulip">
          🌷
        </button>

        <button class="flower-button" data-flower="🌸" aria-label="A blossom">
          🌸
        </button>

        <button class="flower-button" data-flower="🌻" aria-label="A sunflower">
          🌻
        </button>

        <button class="flower-button" data-flower="🌹" aria-label="A rose">
          🌹
        </button>

        <button class="flower-button" data-flower="💐" aria-label="A bouquet">
          💐
        </button>
      </div>

      <p class="garden-message" id="garden-message">
        Tap a flower, jaan. It's waiting for you. ♡
      </p>

      <div class="cat-world">
        <div class="cat-illustration">🐈</div>

        <h3>A tiny cat has a message for you.</h3>

        <p>
          Tap the cat whenever you need a little reminder.
        </p>

        <button class="cat-card" id="cat-button">
          <span class="big-cat">🐈‍⬛</span>
          <span class="cat-instruction">tap me, jaan ♡</span>
          <span class="cat-message" id="cat-message">
            Your little surprise is waiting...
          </span>
        </button>
      </div>
    </section>


    <!-- OUR SOUNDTRACK -->

<section class="soundtrack section" id="soundtrack">
  <div class="section-label">09 — SONGS THAT FEEL LIKE US</div>

  <h2>Our little <em>soundtrack.</em></h2>

  <p class="section-description">
    Some feelings are easier to listen to than explain.
    Tap a song, jaan. ♡
  </p>

  <div class="song-list">

    <article class="song-card" data-song="heeriye">
      <div class="song-number">01</div>
      <div class="song-icon">🎵</div>

      <div class="song-details">
        <h3>Heeriye</h3>
        <p>Jasleen Royal, Arijit Singh</p>
      </div>

      <span class="song-heart">♡</span>
      <audio class="song-audio" preload="none">
       <source src="./music/heeriye.mp3" type="audio/mpeg">
      </audio>
    </article>

    <article class="song-card" data-song="those-eyes">
      <div class="song-number">02</div>
      <div class="song-icon">🌙</div>

      <div class="song-details">
        <h3>Those Eyes</h3>
        <p>New West</p>
      </div>

      <span class="song-heart">♡</span>
      <audio class="song-audio" preload="none">
 <source src="./music/those-eyes.mp3" type="audio/mpeg">
      </audio>
    </article>

    <article class="song-card" data-song="apna-bana-le">
      <div class="song-number">03</div>
      <div class="song-icon">💗</div>

      <div class="song-details">
        <h3>Apna Bana Le</h3>
        <p>Arijit Singh</p>
      </div>

      <span class="song-heart">♡</span>
      <audio class="song-audio" preload="none">
        <source src="./music/apna-bana-le.mp3" type="audio/mpeg">
      </audio>
    </article>

    <article class="song-card" data-song="until-i-found-you">
  <div class="song-number">04</div>
  <div class="song-icon">✨</div>

  <div class="song-details">
    <h3>Until I Found You</h3>
    <p>Stephen Sanchez</p>
  </div>

  <span class="song-heart">♡</span>

  <audio class="song-audio" preload="none">
    <source src="./music/until-i-found-you.mp3" type="audio/mpeg">
  </audio>
</article>

  </div>

  <p class="song-note" id="song-status" aria-live="polite">
    Made of melodies and little memories. ♡
  </p>
</section>

    <!-- FINAL LETTER -->

    <section class="final-section section" id="final-letter">
      <div class="final-stars">✧　⋆　♡　⋆　✧</div>

      <div class="section-label">10 — BEFORE YOU GO</div>

      <h2>
        If you remember<br />
        <em>one thing...</em>
      </h2>

      <button class="final-button" id="reveal-letter">
        Open my last letter ♡
      </button>

      <div class="final-letter hidden" id="final-message">

        <span class="final-envelope">💌</span>

        <h3>To my jaan, Abeeha.</h3>

        <p>
          If you're reading this because you miss me,
          then come here for a second, okay?
        </p>

        <p>
          I know a website can't replace a hug.
          A recording can't replace hearing your voice in person.
          And a screen can't give me the feeling of sitting beside you.
        </p>

        <p>
          But I made this because I wanted to give our little memories
          somewhere to live. Somewhere you can visit whenever you want
          to remember how loved you are.
        </p>

        <p>
          I love the way you share your world with me.
          I love the little things you make for me.
          I love that your voice notes can turn an ordinary moment
          into something I want to keep forever.
        </p>

        <p>
          I love that I can be myself with you.
          I love that I don't have to pretend to be stronger,
          cooler, or less emotional than I really am.
          With you, I can just be me.
        </p>

        <p>
          And if there's one thing I hope you never doubt,
          it's that you matter to me far beyond the pretty words
          I put on this page.
        </p>

        <p>
          You matter on the normal days.
          You matter when we're busy.
          You matter when we're missing each other.
          You matter when neither of us knows exactly what to say.
        </p>

        <p>
          I can't put our whole story into a website.
          I can't fit every feeling, every conversation,
          every little memory into these paragraphs.
          But I can give you this little world and tell you
          that every part of it was made with you in mind.
        </p>

        <p class="final-highlight">
          You are my favourite person to be myself with.
          You are my comfort in a world that can feel overwhelming.
          And the love I have for you is something I want to keep
          caring for, not just something I want to say beautifully.
        </p>

        <p>
          So until the day I can give you a real hug,
          imagine this page holding one for you.
          A long one, jaan. The kind where nobody has to rush away.
        </p>

        <p class="final-last-line">
          Until then, you have my heart. ♡
        </p>

        <div class="final-signature">
          Made with love, just for you.<br />
          <strong>Your jaan ♡</strong>
        </div>

      </div>

      <div class="final-footer">
        <span>memory lane</span>
        <span>made for Abeeha, with love ♡</span>
        <span>always a little more love</span>
      </div>
    </section>

  </main>
`

// Scroll from the welcome button
document.querySelector('#begin').addEventListener('click', () => {
  document.querySelector('#intro').scrollIntoView({
    behavior: 'smooth',
  })
})

// Little cat messages
const catMessages = [
  'Jaan, sending you the biggest virtual hug. 🫂',
  'Someone is smiling right now just because of you. ♡',
  'Your voice notes are little pieces of happiness.',
  'If I could, I would bring you a whole garden of flowers. 🌷',
  'Tum meri comfort person ho, jaan.',
  'Kaash distance ko bas ek button se off kar sakte. 🥹',
  'Your little habits are some of my favourite things.',
  'A tiny reminder: you are loved more than you know. 💗',
  'Somewhere under the same moon, I am thinking of you. 🌙',
  'I wish I could hug you instead of typing this.',
  'You never have to pretend to be someone else with me.',
  'Your happiness matters to me, jaan.',
  'I would listen to your voice notes a hundred times.',
  'A cat, a flower, and a whole lot of love for you. 🐈',
  'One day, a real hug. Until then, this tiny cat is here.',
  'You made little websites for me. I made this world for you.',
  'Tumhari random baatein bhi mere liye special hain.',
  'Please take care of yourself for me, okay? 🌸',
  'I want to keep discovering the little things that make you you.',
  'You are my favourite notification. ♡',
  'A little love note: you never need to earn my kindness.',
  'I hope today gives you a reason to smile.',
  'Your voice makes the distance feel a little smaller.',
  'Jaan, you are precious to me. Never forget that.',
  'Last one for now: I am very, very glad I met you. 💗',
]

let catIndex = 0

document.querySelector('#cat-button').addEventListener('click', () => {
  const message = document.querySelector('#cat-message')

  message.classList.remove('message-pop')
  message.textContent = catMessages[catIndex]

  void message.offsetWidth
  message.classList.add('message-pop')

  catIndex = (catIndex + 1) % catMessages.length
})

// Flower messages
const flowerMessages = [
  'A tulip for the girl who makes ordinary days feel special. 🌷',
  'A little blossom for my favourite person. 🌸',
  'A sunflower to remind you to keep finding your light. 🌻',
  'A rose for a love I never want to take for granted. 🌹',
  'An entire bouquet, because one flower is not enough. 💐',
]

document.querySelectorAll('.flower-button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const message = document.querySelector('#garden-message')

    message.textContent = flowerMessages[index]
    message.classList.remove('message-pop')

    void message.offsetWidth
    message.classList.add('message-pop')
  })
})

// Reveal the final letter
document.querySelector('#reveal-letter').addEventListener('click', () => {
  const letter = document.querySelector('#final-message')
  const button = document.querySelector('#reveal-letter')

  letter.classList.remove('hidden')
  letter.classList.add('letter-reveal')

  button.textContent = 'A little piece of my heart ♡'
  button.disabled = true

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, 150)
})

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'))

    if (target) {
      event.preventDefault()

      target.scrollIntoView({
        behavior: 'smooth',
      })
    }
  })
})

// Click-to-play romantic soundtrack 🎵
document.querySelectorAll('.song-audio').forEach((audio) => {
  audio.volume = 0.8
})
const songCards = document.querySelectorAll('.song-card')
const songStatus = document.querySelector('#song-status')

songCards.forEach((card) => {
  const audio = card.querySelector('.song-audio')
  const title = card.querySelector('.song-details h3')

  card.setAttribute('role', 'button')
  card.setAttribute('tabindex', '0')
  card.setAttribute('aria-label', `Play ${title.textContent}`)

  async function toggleSong() {
    // Clicking the currently playing song pauses it.
    if (!audio.paused) {
      audio.pause()
      card.classList.remove('song-playing')
      songStatus.textContent = 'Paused for a little moment. ♡'
      return
    }

    // Stop any other song before starting this one.
    songCards.forEach((otherCard) => {
      const otherAudio = otherCard.querySelector('.song-audio')

      otherAudio.pause()
      otherCard.classList.remove('song-playing')
    })

    try {
      await audio.play()

      card.classList.add('song-playing')
      songStatus.textContent = `Now playing: ${title.textContent} ♡`
    } catch (error) {
      songStatus.textContent =
        'Could not play this song. Please check its audio file. ♡'

      console.error('Song playback failed:', error)
    }
  }

  card.addEventListener('click', toggleSong)

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleSong()
    }
  })

  audio.addEventListener('ended', () => {
    card.classList.remove('song-playing')
    songStatus.textContent = 'A melody ended, but the memories stay. ♡'
  })
})