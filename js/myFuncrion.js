

var id = document.location.search.split('?id=')[1];
console.log(id)


var mainContent = document.getElementById('productInforamtion');
if(id == 1)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>حساب التوفير</h2>
        <ul>
            <li><h3>عن الحساب</h3></li>
            <li><p>إحدى أنواع الحسابات البنكية التي يتجه إلى فتحها عدد كبير من الأشخاص، وذلك بسبب طريقتها التي تعتمد على إيداع مبلغ معين في البنك، والذي يقوم بدوره باستثماره وزيادة الأرباح على الحساب . 
            يستعمل حساب التوفير كطريقة تهدف لادخار الأموال والاستثمار بها من خلال البنك، ومن ثم الحصول على فوائد شهرية أو نصف سنوية أو سنويةويمكن للعميل أن يقوم بسحب وإيداع الأموال بالحساب في أي وقت؛ حيث يحصل على بطاقة مصرفية تساعده على ذلك، ويتم احتساب الفوائد وإضافتها للحساب بشكل دوري، بعد مرور فترة معينة يتم تحديدها حسب الاتفاق مع البنك، ويتم حساب قيمة الفوائد وفقاً للمبلغ المالي الموجود بالحساب.
            </p></li>
            <li><h3>الشروط</h3></li>
            <li>أن يكون الحساب بالليرة السورية فقط</li>
            <li>ألا يقل المبلغ المودع عند فتحه عن 100 ألف ليرة سورية </li>
            <li>ويحصل العميل على دفتر توفير يقوم باستعماله في حالات الإيداع أو السحب.</li>
        </ul>
    </div>
    `;

}
else if(id ==2)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>الحساب الجاري</h2>
        <ul>
            <li><h3>عن الحساب</h3></li>
            <li><p>الحساب الجاري هو الخيار الأفضل للعملاء للتعامل المصرفي لأنه يمكنهم من إدارة المصروفات ولالتزامات المالية.
            وهو حساب تحت الطلب، لا يشارك في أرباح الاستثمار ولا يتحمل مخاطره. ويجوز للبنك استثمار بعض أو كل أرصدة الحسابات الجارية بحيث
            تعود الأرباح أو الخسائر الناتجة عن هذه الاستثمارات إلى البنك.
            </p></li>
            <li><h3>الشروط</h3></li>
            <li> أن يكون الحد الأدنى لفتح الحساب الجاري 300,000 الف  ليرة سورية أو ما يعادلها من العملات الأجنبية</li>
        </ul>
    </div>
    `;
}
else if(id ==3)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>القرض التعليمي</h2>
        <ul>
            <li><h3>عن القرض</h3></li>
            <li><p>من منطلق رسالة مؤسسة تميز ورؤيتها بتوفيرخدمات مالية متنوعة تلبي احتياجات ابناء الشعب فأن القرض التعليمي موجه لجميع أفراد المجتمع الراغبين بالحصول على القرض لغاية تعليمية، </p></li>
            <li><h3>الشروط</h3></li>
            <li>ان يكون من المواطنبن السوريين </li>
            <li>ان يتراوح عمر المقترض بين 18_65سنة ( عند نهاية القرض)</li>
            <li>ان يكون المقترض قد ادى خدمة العلم او معفى منها او لديه تأجبل يغطي مدة القرض للذكور</li>
            <li>تقديم الثبوتيات الشخصية : (الهوية الشخصية _ سند إقامة _ غير محكوم عليه ) </li>
            <li>اثبات دخل ( فواتير شراء او اثبات حركة العمل اليومية بحسب طبيعة المشروع او كشف حساب مصرفي يبين حركة الحساب لفترة 6 اشهر ان وجد )</li>
            <li>كفلاء شخصيين </li>
            <li>اشعار تسجيل في احدى الجامعات او المدارس السورية المرخصة </li>
            <li>أي وثائق أخرى معززة يمكن طلبها وبحسب الحاجة </li>


            <li><h3>المبالغ</h3></li>
            <li>وتكون المبالغ الممنوحة بحد أدنى 250,000 ل.س ولغاية 18,000,000 ل.س بسعر فائدة 10% سنوياً ولمدة زمنية تتراوح من 12 شهراً ولغاية 60 شهراً للمبالغ دون 5 ملايين ليرة سورية ولغاية 96 شهراً للمبالغ التي تزيد عن 5 ملايين ليرة سورية</li>


        </ul>
    </div>
    `;
}
else if(id ==4)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>القرض السكني</h2>
        <ul>
        <li><h3>عن القرض</h3></li>
        <li><p>ان تمكين العملاء من الحصول على قرض لتمويل السكن يساهم في تحسين وجودة وسلامة المساكن وهو ما يشكل أولوية لتميز بهدف القيام بتنمية حاسمة تستهدف شركة تميز المجتمعات ذات الدخل المنخفض والمحرومة من الخدمات التي غالبا ما تكون المساكن فيها ذات نوعية منخفضة ومزدحمة وتعاني من سوء في شبكة الصرف الصحي والعزل والتهوية </p></li>
        <li><h3>الشروط</h3></li>
        <li>أن يأتي المقترض بكفيل واحد على الأقل؛ بحيث يكون الكفيل من العاملين في الدولة إذا كان الدخل حرًا. وأن تقع عقارات الضمانة في مناطق مخدمة، وآمنة، وقابلة للتسييل (تحويل الأموال إليها).</li>
        <li>ألا يتجاوز عمر العميل في نهاية مدة قرض المنزل عن 65 عامًا. يمكن الاقتراض من قبل أي شخص سوري سواءً كان موظف قطاع خاص، أو عام، أو صاحب مهن حرة.</li>
        <li>ألا تتجاوز مدة القرض 20 سنةً.</li>
        <li>النسبة للمقيمين، يجب تقديم بطاقَة هوية وَطنية سارية. أما لغير المقيمين، فيجب أن يقدموا جواز سفر ساري المفعول، وكذلك تأشيرة إقامة. أوراق إثبات الدخل، والتي تتمثل بكشف حساب بنكي لآخر ستة أشهر، وأوراق تبين ائتمانات الراتب. مستندات متعلقة بالممتلكات كسندات الملكية، وإيصالات دفع، ونسخة من اتفاقية البيع، وسندات ملكية، وإثبات عدم وجود رهن على الممتلكات. مستندات أخرى لقرض المنزل كإثبات المساهمة العامة، وعقد العمل، وصورة بحجم جواز السفر لكافة المتقدمين لسحب القروض؛ بحيث تلصق على نموذج الطلب وتُحقّق من رسوم المعالجة.</li>


        <li><h3>المبالغ</h3></li>
        <li>أن تبلغ نسبة التمويل 60% من تقييم العقار
        . وأن يبلغ الحد الأقصى لقيمة القرض حوالي50 مليون ليرة سورية 
        تبلغ فائدة القرض للعقار السكني بنسبة 11% لمدة أقصاها 15 سنة.
         يمكن تسديد الأقساط الشهرية بالبطاقة المصرفية، أو من خلال زيارة الفروع.
        </li>

        </ul>
    </div>
    `;
}
else if(id ==5)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>القرض التجاري</h2>
        <ul>
            <li><h3>عن القرض</h3></li>
            <li><p>تمنح هذه التمويلات لاصحاب وصاحبات المشاريع الانتاجية الصيرة والمتوسطة الفاعلة بجميع القطاعات الاقتصادية الراغبين بتطوير مشاريعهم تستخدم هذه التمويلات لرفع رأس مال العامل مثل شراء مواد الخام ,البضاعة , تغطية مصاريف تشغيلية , شراء معدات للمشاريع الخدماتية 
            كما يمكن استخدام هذا التمويل لشراء اصول ثابتة (غير انتاجية او تحتاج لوقت لتصبح منتجة ) بشرط توفير ما يثبت قدرة المقترض على السداد
            </p></li>
            <li>test</li>
            <li><h3>الشروط</h3></li>
            <li>يجب الا يقل عمر المتقدم عن 21 عام </li>
            <li>المتقدم لطلب القرض يحمل الهوية السورية </li>

            <li>للمتقدم بطلب القرض سجل أئتماني مقبول لمؤسسة تميز </li>
            <li>ان يكون المشوع مسجل عند الجهات المختصة</li>
            <li>ان لا تتجاوز قيمة القرض رأس مال المشروع </li>
            <li>تم تأسيس المشروع قبل عامين على الأقل من التقدم بطلب القرض </li>
            <li>تقديم الثبوتيات الشخصية : (الهوية الشخصية _ سند إقامة _ غير محكوم عليه ) </li>
            <li>اثبات دخل ( فواتير شراء او اثبات حركة العمل اليومية بحسب طبيعة المشروع او كشف حساب مصرفي يبين حركة الحساب لفترة 6 اشهر ان وجد )</li>
            <li><h3>المبالغ</h3></li>
            <li>أن يبلغ الحد الأقصى لقيمة القرض حوالي 25مليون ليرة سورية </li>
            <li>تبلغ فائدة القرض التجاري بنسبة 18% لمدة أقصاها 15 سنة.</li>
            <li> يمكن تسديد الأقساط الشهرية بالبطاقة المصرفية، أو من خلال زيارة الفروع</li>

        </ul>
    </div>
    `;
}
else if(id ==6)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>القرض الزراعي</h2>
        <ul>
            <li><h3>عن القرض</h3></li>
            <li><p>صمم خصيصا لصاحبات وأصحاب المشاريع الزراعية الصغيرة الذين يرغبون بتطوير مشاريعهم الزراعية والتي ترتكز هذه المشاريع بشكل أساسي على مشاركة العائلة في ادارة المشروع والاشراف عليه </p></li>
            <li><h3>الشروط المطلوبة</h3></li>
            <li>أن يكون من المواطنين السوريين أو من في حكمهم</li>
            <li>أن يتراوح عمر المقترض بين 18~65 سنة (عند نهاية القرض)</li>
            <li>أن يكون المقترض قد أدى خدمة العلم أو معفى منها أو لديه تأجيل يُغطي مدة القرض للذكور</li>
            <li>تقديم الثبوتيات الشخصية: (الهوية الشخصية / سند إقامة / غير محكوم)</li>
            <li>إثبات دخل (فواتير شراء أو شرح من الوحدة الارشادية بحسب طبيعة العمل (ثروة زراعية – ثروة حيوانية </li>
            <li>
            إثبات ملكية مكان المشروع (عقد آجار / سند تمليك / كتاب من المختار أو أي ثبوتيات تفيد بملكية عقار المشروع أو استثماره)
            </li>
            <li><h3>المبالغ</h3></li>
            <li>تكون المبالغ الممنوحة بحد أدنى 250,000 ل.س ولغاية 5,000,000 ل.س بسعر فائدة 14% سنوياً ولمدة زمنية تتراوح من 12 شهراً ولغاية 60 شهراً.</li>


        </ul>
    </div>
    `;
}
else if(id ==7)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>قرض النقل</h2>
        <ul>
        <li><h3>عن القرض</h3></li>
        <li><p>قامت مؤسسة تميز بطرح منتج جديد للسوق لدعم العاملين بمجموعة متنوعة من للآلات والمعدات ووسائل النقل
        تمويل وسائط النقل العمومي ( تاكسي ,سرفيس, باص.... الخ)
        تمويل وسائط النقل للباعة المتجولين 
        </p></li>
        <li><h3>الشروط المطلوبة</h3></li>
        <li>ن يكون المتقدم للقرض سوري الجنسية .</li>
        <li>أن  لا يزيد عمر المقترض والكفيل على (60) عاما ولا يقل عن (18) عاما.</li>
        <li>.العمر الزمني للمركبة العمومي : تاكسي 3 سنوات,السرفيس 5 سنوات,باص عمومي 7 سنوات, النقل المشترك صغير أو كبير 10 سنوات.</li>
        <li>إحضار شهادة فحص المركبة من مركز فني معتمد.</li>
        <li>يتم الصرف دفعة واحدة للبائع.</li>
        <li>إثبات دخل (فواتير شراء أو إثبات حركة العمل اليومية بحسب طبيعة المشروع أو كشف حساب مصرفي يبين حركة الحساب لفترة 6 أشهر إن وجد)</li>
        <li>تقديم الضمانات المطلوبة: (رهن عقار أو رهن مركبات أو رهن ذهب أو كفلاء شخصيين).</li>
        <li><h3>المبالغ</h3></li>
        <li>سقف التمويل (20) مليون  كحد أعلى وحسب التكاليف الفعلية للمشروع.
        يتقاضى الصندوق مرابحة نسبتها (12 %) سنويا.
        يتم سداد القرض على مدار (7) سنوات بالإضافة إلى (6 ) شهور مهلة سداد تبدأ من تاريخ توقيع الاتفاقية.
        </li>

        </ul>
    </div>
    `;
}
else if(id ==8)
{
    mainContent.innerHTML =
    `
    <div class="cardInforamtion">
        <h2>قرض الورشات</h2>
        <ul>
        <li><h3>عن القرض</h3></li>
        <li><p>يستهدف قرض الورشات أصحاب المشاريع الصغيرة والمتوسطة في المحافظات السورية (صغار التجار –الورش الصناعية -أصحاب المهن وغيرها)</p></li>
        <li><h3>الشروط المطلوبة</h3></li>
        <li> تقديم الضمانات المطلوبة: (رهن عقار أو رهن مركبات أو رهن ذهب أو كفلاء شخصيين)</li>
        <li>أن يكون من المواطنين السوريين أو من في حكمهم.</li>
        <li>يتراوح عمر المقترض بين 18~65 سنة (عند نهاية القرض) </li>
        <li>أن يكون المقترض قد أدى خدمة العلم أو معفى منها أو لديه تأجيل يُغطي مدة القرض للذكور</li>
        <li>تقديم الثبوتيات الشخصية: (الهوية الشخصية / سند إقامة / غير محكوم) </li>
        <li>إثبات دخل (فواتير شراء أو إثبات حركة العمل اليومية بحسب طبيعة المشروع أو كشف حساب مصرفي يبين حركة الحساب لفترة أقلها 6 أشهر إن وجد أو ميزانيات).</li>
        <li>تقديم الضمانات المطلوبة: (رهن عقار أو رهن مركبات أو رهن ذهب أو كفلاء شخصيين) * يقبل رهن المركبات للقروض دون العشرة ملايين. أي قرض يزيد عن العشرة ملايين مطلوب عقار أو ذهب حصر</li>
        <li>إثبات ملكية مكان المشروع (عقد آجار / سند تمليك / كتاب من المختار أو أي ثبوتيات تفيد بملكية عقار المشروع أو استثماره).</li>
        <li>أي وثائق أخرى معززة يمكن طلبها وبحسب الحاجة.</li>
        <li><h3>المبالغ</h3></li>
        <li>تكون المبالغ الممنوحة بحد أدنى 250,000 ل.س ولغاية 30,000,000 ل.س، القرض مع فائدة تصل الى 14% ويخضع لعمولة إقراض مخفضة ولمدة زمنية تتراوح من 12 شهراً ولغاية 60 شهراً وتمتد لغاية 96 شهراً للمبالغ التي تزيد عن 5 ملايين ليرة سورية.</li>
        </ul>
    </div>
    `;
}
function chkName() { 
    var fullname = document.getElementById('nameError');
    if(fullname.value === "")
    {
        alert('يجب ادخال اسم')
        fullname.focus();
        
    }
    if(!fullname.value.match(/^[a-zA-Z ]*^[\u0621-\u064A ]+$/))
    {
        alert('الاسم غير صحيح');
        fullname.focus();
        fullname.select();
    }
    const name = localStorage.setItem('name',fullname.value)

    
}


function chkPhone() { 
    var myPhone = document.getElementById('phone'); 
    var pos = myPhone.value.search(/^((00)|(\+))963((\d)|(9[543]))\d{8}$/); 
    if (pos !=0) { 
    alert("قم بالتحقق من رقم الهاتف"); 
        myPhone.focus(); 
        myPhone.select(); 
    }
    const phone = localStorage.setItem('phone', myPhone.value)


} 
function chkemail(){
    var myemail = document.getElementById('email');
    var pos = myemail.value.search( /[a-z0-9_\.\-]+@+[a-z0-9_\.\-]+\.+(com|net|org|info)/i);
    if(pos !=0){
        alert('ادخل ايميلك بصورة صحيحة');
        myemail.focus(); 
        myemail.select(); 
    }
    const email = localStorage.setItem('email', myemail.value)

    
}
function chknumber(){
    var number = document.getElementById('number');
    var pos = number.value.search(/^((01)|(02)|(03)|(04)|(05)|(06)|(07)|(08)|(09)|(10)|(11)|(12)|(13)|(14))\d{9}$/);
    if(pos !=0) {
     alert("تحقق من رقمك الوطني");
     number.focus(); 
     number.select();
     
    }
    const nationalnumber = localStorage.setItem('nationalnumber', number.value)
}
function chkamount(){
    var amount = document.getElementById('amount');
    var pos = amount.value.search(/^((1)|(2)|(3)|(4)|(5)|(6)|(7)|(8)|(9)(10))\d{6}$/);
    if (pos != 0 ){
        alert("قيمة القرض المدخلة ليست بين الحد الادنى للقرض وحده الاقصى");
        amount.focus(); 
        amount.select();
    }else{
        // return true
    }
    const loanamount = localStorage.setItem('loanamount', amount.value)
    
}

    var code;
    function createCaptcha() {

    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {

    var index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
    else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);

    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); 
    }
    function validateCaptcha() {
    capth = document.getElementById("cpatchaTextBox");
    if (capth.value !== code) {
    alert("Invalid Captcha. try Again");
    createCaptcha();
    event.preventDefault();
    }

    }


function dateOfBirth(){
    var dateOfBirth = document.getElementById('date');
    localStorage.setItem('date' ,dateOfBirth.value)
}

function loan(){
    var typeLoan = document.getElementById('typeOfLoan');
    localStorage.setItem('loan' ,typeLoan.value)

}

function yearOfLoan(value){
    localStorage.setItem('year',value)
}
function typePayment(){
    var payment = document.getElementById('payment');
    localStorage.setItem('pay',payment.value);
    console.log(payment.value)
}

function result(){
let mainResult = document.getElementById('resultMain');



var fullName = localStorage.getItem("name");
var number = localStorage.getItem("nationalnumber");
var date = localStorage.getItem('date');
var myPhone = localStorage.getItem("phone");
var myemail = localStorage.getItem("email");
var amount = localStorage.getItem("loanamount");
var typeLoan = localStorage.getItem('loan');
var yearLoan = localStorage.getItem('year');
var pay = localStorage.getItem('pay')

mainResult.innerHTML +=
    `
    <div id="loanresult">
    <h2>معلومات مقدم القرض</h2>
    <ul>
    <li>الاسم: ${fullName}</li>
    <li>الرقم الوطني: ${number}</li>
    <li>تاريخ الميلاد: ${date}</li>
    <li>رقم الموبايل: ${myPhone}</li>
    <li>الايميل: ${myemail}</li>
    <li>قيمة القرض: ${amount}</li>
    <li>نوع القرض: ${typeLoan}</li>
    <li>عدد سنوات القرض: ${yearLoan}</li>
    <li> طريقة تسديد الدفعات: ${pay}</li>


    </ul>
    </div>

    
    `
}

onload = result()
    


