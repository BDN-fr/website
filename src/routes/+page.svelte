<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Window from '$lib/components/ui/Window.svelte';

	let testWindowOpened = $state(true);
	let count = $state(0);
</script>

<Window
	title={`Clicker | ${count}`}
	bind:open={testWindowOpened}
	class="flex flex-col gap-2 items-center justify-center p-8 px-16"
	minWidthClass="min-w-fit"
	minHeightClass="min-h-fit"
	isResizable={false}
	isFullscreenable={false}
>
	<Button onclick={() => (count += 1)}>Click</Button>
</Window>
<Button class="m-4" onclick={() => (testWindowOpened = !testWindowOpened)}>test window</Button>
<br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellat laborum autem, nam neque quibusdam
excepturi amet doloribus, ad praesentium ut nostrum ullam. Quam optio iste iure officiis soluta nobis?
Laudantium corporis ipsam fugiat quae quas distinctio, incidunt illo possimus facilis excepturi, aspernatur
perferendis suscipit, quod non accusamus quis delectus. Fuga quisquam minus deserunt at quos perferendis
quo nemo est? Neque numquam quam quae possimus non perspiciatis minus voluptatum dolorum consequuntur
rerum facere sequi necessitatibus, ducimus accusamus laborum ipsum hic. Laborum quas facilis aperiam distinctio,
rerum tempora facere sunt cum. Ipsum molestiae maiores, iure autem culpa harum? Iure culpa voluptatum
laudantium aut dolore illum fugiat. Fugit recusandae facere fuga odio, labore error tenetur ad expedita
delectus voluptates quibusdam illo! Odio. Ad in laborum eius veritatis perspiciatis ratione dolore fugiat
voluptate, nobis dignissimos explicabo illo numquam quae qui earum ipsum, iste quos, doloremque obcaecati.
Tempore magnam accusantium nihil aliquid tempora impedit? Explicabo nemo quaerat distinctio maxime vero
vel modi quos nesciunt dignissimos asperiores deserunt ducimus soluta sunt fugiat provident tempore neque
voluptates eius et iste, atque sequi. Voluptatibus dolores nulla iste. Eum, vel consectetur rem explicabo
modi atque placeat unde asperiores, beatae aut facere! Eos culpa eligendi magni cum! Quis, voluptate dicta
dolores ipsa minus deleniti blanditiis recusandae exercitationem facilis nulla? Excepturi dolores quisquam
ut deleniti odit, eum mollitia beatae odio libero ducimus, nulla porro blanditiis at, perferendis eaque?
Distinctio, numquam quia! Odio neque sit sed eveniet accusamus temporibus officia natus. Quae officiis
est fugit eveniet quo unde labore sapiente numquam maxime dolor, esse quia sunt similique harum accusamus
ut velit, reprehenderit aliquam praesentium ipsum neque quisquam! Sunt natus reiciendis architecto. Alias,
minus doloribus! Magni nesciunt aliquam esse accusamus at ad adipisci labore architecto dolorum rerum
possimus, nisi ducimus illum maiores inventore, consequuntur voluptates quia, sequi ratione quod qui?
Quia, fuga! At ad odio commodi modi recusandae repudiandae totam alias! Earum, sapiente consectetur! Porro
magni explicabo nulla atque qui alias, totam iure itaque praesentium possimus nostrum saepe molestias
obcaecati odit sequi. Neque animi error aspernatur cupiditate ad asperiores exercitationem eius deleniti
maxime, numquam fugiat illum nulla debitis magnam totam delectus inventore perferendis unde quisquam?
Quidem ad, iusto vero doloremque expedita totam? Impedit illo eum cum accusamus reiciendis doloremque
aliquam praesentium laborum qui optio, enim voluptatum. Unde hic inventore, non odio optio dolorum consequatur
accusamus! Provident accusamus sint at vero quod eligendi? Error consequatur ipsum unde, a labore commodi
id cum perferendis distinctio accusamus vero officia itaque iste voluptas illum sunt sapiente modi at
expedita iusto. Exercitationem officia labore molestias qui atque? Corrupti enim iure fugit similique
distinctio. Sint hic eos eum blanditiis dolorem et beatae aspernatur magnam voluptatibus dolor, laboriosam
sequi nam vel deleniti nemo quam atque accusamus iure? Minima, asperiores? Aliquam qui recusandae maiores
vel pariatur a labore eligendi illum, aliquid harum aut temporibus cupiditate sunt. Totam eligendi eius
quaerat quo. Maiores perferendis vitae recusandae rem corrupti, fugit dicta doloribus! Repellat illo dolor
sed autem necessitatibus delectus, quod explicabo expedita dicta iusto quos unde quam totam et inventore
commodi, ea aspernatur magni aut quas natus maiores alias debitis libero. Eligendi. Praesentium quam voluptates
vero. Non ut unde iste similique voluptas alias velit. Officiis distinctio molestiae quam libero commodi
nisi autem harum, et quae quas reiciendis corporis corrupti minus, cumque rerum. Ea aspernatur assumenda,
voluptates aut sequi dolorem exercitationem eveniet quas? Ipsa, laboriosam mollitia amet quam officiis
quas, dignissimos necessitatibus optio voluptate ducimus, maiores ipsum unde a quos impedit ea quia? Enim
ad illo soluta vitae odio ipsa sapiente natus totam delectus quod. Ipsa eaque quaerat consequatur quam
perferendis sit? Culpa debitis praesentium ullam asperiores officiis deserunt doloremque perspiciatis
aperiam inventore! Obcaecati cumque, quos perspiciatis doloremque velit ipsam nulla, numquam adipisci
minus soluta eligendi vel earum, praesentium magnam. Minima, mollitia odio cum autem laborum in optio
numquam natus, aliquam eos corporis. Ipsum consequuntur esse cum reiciendis, doloribus quo, beatae voluptatem
modi enim, atque vero error omnis. Ullam commodi quo accusantium sequi dolore. Quos sunt omnis ratione
alias odio obcaecati quam repudiandae. Aliquid alias adipisci, libero sed quaerat nostrum voluptatibus
fugit obcaecati error, quod fuga eos tempora quos molestias totam iure esse aliquam blanditiis quae! Perferendis
tempora nihil sit facilis quas harum! Ipsam et itaque dignissimos blanditiis adipisci error autem excepturi
eligendi, culpa quas distinctio, atque magni eos quibusdam vel officia, exercitationem asperiores. Atque
tempore numquam rerum ab dolor unde consequuntur voluptatem. Sequi quam minima soluta ad at necessitatibus
ipsa perspiciatis in assumenda, nobis, qui explicabo, rem eos porro dolorem cum. Excepturi ipsum laboriosam,
fuga commodi dolorum quae totam ratione distinctio. Repellendus. Accusantium nesciunt eaque eligendi provident
vero culpa autem, officiis explicabo dolore animi velit obcaecati quidem quibusdam itaque dolorem? Eum
illum adipisci perspiciatis magnam deleniti voluptate laborum reiciendis similique quidem ad? Esse corrupti
fugit architecto blanditiis quo excepturi unde dicta provident. Eligendi tempora iusto nihil voluptates
pariatur temporibus tenetur, eveniet provident illo eos sequi, possimus animi quisquam sit. Est, illum
aspernatur. Illo aperiam laboriosam in atque, culpa corporis, error modi autem incidunt neque reiciendis
veniam. A optio ullam ipsum aspernatur corporis? Iusto quasi fuga facilis quidem alias exercitationem
sit impedit odio? Fugiat rem nemo, cupiditate laboriosam iusto harum, nulla sed consectetur eum laudantium,
repellat ratione quibusdam. Fugit magni optio molestiae at aliquam quaerat tempore iste ipsam nihil eaque,
expedita molestias deleniti! A beatae quos doloremque, assumenda architecto dignissimos cupiditate pariatur
minus itaque iure suscipit ducimus ut modi maiores odit adipisci tempora eius temporibus fugit nobis.
Esse vitae deleniti ratione distinctio sequi! Cumque recusandae odio magnam, modi vel laudantium exercitationem
officia. Magni in deleniti voluptates natus sit qui quibusdam doloribus quis. Odio quibusdam possimus
rerum ex, at aliquam sequi. Asperiores, saepe eveniet. Facere, itaque? Delectus iure doloremque alias
recusandae magni ipsa unde aspernatur officia quisquam dolorem quo optio, libero doloribus autem. Dignissimos
molestias eveniet sint accusamus porro debitis quidem corrupti, quia nulla! Id nihil harum minima quia
consequuntur, labore accusamus repellat ab suscipit dolorem iure ipsa, eos deleniti deserunt ducimus unde
ipsum quibusdam modi tempora qui odit dolore? Vel voluptates nulla sed! Beatae doloribus eum, cum praesentium
qui assumenda, vel blanditiis quibusdam porro recusandae expedita iusto dolor ut, dolorem aspernatur tempore
minima. Repellat debitis voluptate accusantium amet architecto vitae. Dicta, quod ab. Omnis reiciendis
nostrum enim harum nobis porro voluptas impedit, earum corporis ipsum similique velit et commodi aliquid
non asperiores temporibus cupiditate, qui explicabo quia quo vero quisquam repudiandae! Similique, excepturi!
Eius, totam ipsum eveniet obcaecati fuga pariatur provident. Nostrum eius accusantium corrupti qui sint
sit mollitia porro adipisci inventore quos quas totam nam eaque cum distinctio repudiandae dolore, magni
ad? Enim consequuntur et corporis sed, porro quae eius molestiae accusantium magni doloribus soluta illum
eos vitae natus necessitatibus recusandae exercitationem in. Facilis eligendi est libero nihil nisi? Libero,
minima distinctio! Eaque cumque quisquam saepe aliquam quia ipsa maxime, vero quidem! Excepturi repudiandae
ullam commodi autem praesentium mollitia optio perspiciatis earum, assumenda doloremque, porro doloribus
fugit. Numquam fugit eveniet magnam accusamus? Dolorem tempora tenetur rerum incidunt, eveniet pariatur
blanditiis eum quos atque iure perferendis enim officiis dolore veniam mollitia quibusdam? Facere eos
impedit accusamus cupiditate eius, dolorem at aut repellat dolor! Error tempora quas quisquam saepe at
beatae, debitis doloribus sequi tenetur asperiores placeat dignissimos aliquid? Assumenda quae doloribus
veniam expedita. Tempore praesentium eius quaerat facilis doloribus rerum. Ex, quas est? Quam dolorum,
impedit culpa nesciunt suscipit iste ipsum alias quasi delectus ipsa. Cumque aperiam illo sequi id minima
omnis optio unde, accusantium veritatis sapiente asperiores suscipit beatae, qui placeat quis. Illum voluptatibus
commodi, ipsa in fuga itaque amet. Reprehenderit porro hic accusamus dolorem itaque magnam eos quia accusantium!
Consequatur sunt alias architecto quasi saepe ipsum praesentium quaerat possimus, quibusdam numquam? Quibusdam
nobis sit voluptas molestiae ex expedita accusamus illo vitae illum natus laudantium aperiam tempora nemo
nostrum tenetur pariatur porro, vel enim? Eligendi enim sed voluptas iusto saepe maiores praesentium.
Laborum ducimus sapiente commodi fuga! Aspernatur voluptatum quibusdam provident veritatis possimus. Expedita
porro, pariatur ex quo optio recusandae ab? Esse aspernatur quaerat explicabo fugiat itaque aut officia
cum unde cupiditate. Suscipit aspernatur sed ex aliquid eos, fugit in voluptatibus veniam est? Non sint
temporibus quae alias, delectus voluptates laboriosam aliquam distinctio error. Nulla, distinctio asperiores
amet fugiat inventore rerum dolore. Sit consectetur, eveniet, qui laborum aspernatur debitis officia iure
soluta odio iusto suscipit facilis quibusdam? Numquam, saepe voluptatibus. Itaque incidunt libero possimus
similique laborum dolorem nihil corrupti veniam? Explicabo, delectus? Numquam excepturi, vitae in omnis
asperiores facilis sit perspiciatis neque, consequatur aperiam deleniti maiores dolores aut accusamus
eos, veritatis sequi laboriosam esse nesciunt! Deserunt, obcaecati accusamus voluptates eligendi qui earum!
