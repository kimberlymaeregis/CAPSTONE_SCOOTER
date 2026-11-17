(function(){
"use strict";

var LOGO = "data:image/jpeg;base64,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";
document.getElementById('logoImg').src = LOGO;
document.getElementById('branchLogoImg').src = LOGO;
document.getElementById('authLogo').src = LOGO;
document.getElementById('customerLogo').src = LOGO;

/* customer portal demo */
var customerPortal = document.getElementById('customerPortal');
var customerBookingsByEmail = Object.create(null);
var customerState = {page:'home', name:'', email:'', phone:'', bookings:[], colors:{}, checkout:null, selectedModel:'', notificationOpen:false, unreadNotifications:0};
var SCOOTER_COLORS = [
  {name:'Black', swatch:'#17211e', icon:'#17211e'},
  {name:'White', swatch:'#f4f5f2', icon:'#f4f5f2'},
  {name:'Grey', swatch:'#89918e', icon:'#89918e'},
  {name:'Grey & Black', swatch:'linear-gradient(135deg,#89918e 0 50%,#17211e 50% 100%)', icon:'#59615d'},
  {name:'Light Blue & White', swatch:'linear-gradient(135deg,#68d6e8 0 50%,#f4f5f2 50% 100%)', icon:'#68c4d5'},
  {name:'Red', swatch:'#e21d2b', icon:'#e21d2b'},
  {name:'Maroon', swatch:'#781d37', icon:'#781d37'},
  {name:'Blue', swatch:'#465ba0', icon:'#465ba0'}
];
function scooterColor(name){ return SCOOTER_COLORS.filter(function(color){return color.name===name;})[0] || SCOOTER_COLORS[0]; }
function modelPhoto(model,color){
  if(!model) return '';
  return model.photos[color] || model.photos[model.colors[0]] || '';
}
function ensureAdminCustomer(profile){
  var email=(profile.email||'').trim().toLowerCase();
  var customer=state.customers.filter(function(entry){
    return email ? (entry.email||'').toLowerCase()===email : (!entry.email && entry.name===profile.name);
  })[0];
  if(customer){
    if(profile.name) customer.name=profile.name;
    if(profile.phone) customer.phone=profile.phone;
    return customer;
  }
  var name=profile.name || email.split('@')[0] || 'Customer';
  var initials=name.split(/\s+/).map(function(part){return part.charAt(0);}).join('').slice(0,2).toUpperCase();
  customer={name:name,initials:initials,status:'New customer',rentals:0,ltv:0,email:email,phone:profile.phone||'Not provided'};
  state.customers.unshift(customer);
  return customer;
}
function syncCustomerBookingStatus(booking){
  if(!booking.customerEmail) return;
  var list=customerBookingsByEmail[booking.customerEmail.toLowerCase()]||[];
  list.forEach(function(entry){
    if(entry.code===booking.code){
      entry.status=booking.status;
      entry.paymentStatus=bookingPaymentStatus(booking);
    }
  });
  var customer=state.customers.filter(function(entry){return (entry.email||'').toLowerCase()===booking.customerEmail.toLowerCase();})[0];
  if(!customer) return;
  if(booking.status==='Active') customer.status='Riding now';
  if(booking.status==='Completed'){
    customer.rentals=(customer.rentals||0)+1;
    customer.ltv=(customer.ltv||0)+Number(booking.price||0);
    customer.status=customer.rentals>1?'Returning customer':'Completed a rental';
  }
}
function reserveBookingUnit(booking){
  var model=MODELS.filter(function(entry){return entry.name===booking.model;})[0];
  var requestedColor=booking.color || (model ? model.colors[0] : 'Black');
  var unit=booking.scooterId ? findScooter(booking.scooterId) : null;
  if(!unit || unit.status!=='Available' || unit.model!==booking.model ||
     scooterColorName(unit)!==requestedColor || (unit.battery!=null && Number(unit.battery)<25)){
    unit=availableScootersForColor(booking.model,requestedColor)[0];
  }
  if(!unit) return false;
  booking.scooterId=unit.id;
  booking.color=requestedColor;
  unit.status='Reserved';
  return true;
}
function escapeHtml(value){
  return String(value || '').replace(/[&<>"']/g, function(char){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char];
  });
}
function enterCustomerApp(profile){
  var email = profile.email.trim().toLowerCase();
  customerState.name = profile.name || email.split('@')[0];
  customerState.email = email;
  customerState.phone = profile.phone || 'Not provided';
  if(!customerBookingsByEmail[email]) customerBookingsByEmail[email] = [];
  customerState.bookings = customerBookingsByEmail[email];
  state.bookings.filter(function(booking){return (booking.customerEmail||'').toLowerCase()===email;}).forEach(function(booking){
    if(!customerState.bookings.some(function(entry){return entry.code===booking.code;})){
      var bookingModel=MODELS.filter(function(item){return item.name===booking.model;})[0];
      customerState.bookings.unshift({code:booking.code,model:booking.model,color:booking.color||(bookingModel?bookingModel.colors[0]:'Black'),days:booking.days||1,date:booking.pickupDate||booking.day,status:booking.status,paymentStatus:bookingPaymentStatus(booking),deliveryLabel:booking.deliveryLabel||'Self pick-up',total:booking.price||0});
    }
  });
  customerState.page = 'home';
  document.getElementById('authStory').hidden = true;
  document.querySelector('.auth-panel').hidden = true;
  document.getElementById('customerApp').hidden = false;
  customerPortal.classList.add('customer-logged-in');
  document.body.classList.remove('auth-visible');
  document.body.classList.add('customer-visible');
  renderCustomerPage();
  renderChat();
}
function leaveCustomerApp(){
  customerPortal.classList.remove('customer-logged-in');
  document.body.classList.remove('customer-visible');
  document.getElementById('customerApp').hidden = true;
  document.getElementById('authStory').hidden = false;
  document.querySelector('.auth-panel').hidden = false;
  customerPortal.hidden = true;
  document.getElementById('adminLoginScreen').hidden = !!activeAdminAccount;
  document.getElementById('adminApp').hidden = !activeAdminAccount;
  document.body.classList.remove('auth-visible');
  renderChat();
}
function customerNav(page){
  customerState.page = page;
  renderCustomerPage();
  window.scrollTo(0,0);
}
function updateCustomerNotifications(){
  var button=document.getElementById('customerNotificationBtn');
  var panel=document.getElementById('customerNotificationPanel');
  var count=document.getElementById('customerNotificationCount');
  if(!button||!panel||!count) return;
  button.setAttribute('aria-expanded',customerState.notificationOpen?'true':'false');
  count.hidden=customerState.unreadNotifications===0;
  count.textContent=customerState.unreadNotifications>9?'9+':String(customerState.unreadNotifications);
  panel.hidden=!customerState.notificationOpen;
  panel.innerHTML='<div class="customer-notification-heading"><strong>Notifications</strong><span>'+customerState.bookings.length+' updates</span></div>'+(customerState.bookings.length?'<div class="customer-notification-list">'+customerState.bookings.slice(0,6).map(function(booking){return '<button class="customer-notification-item" type="button" data-customer-notification><span class="customer-notification-icon">'+ICON.calendar+'</span><span class="customer-notification-copy"><strong>'+escapeHtml(booking.model)+'</strong><small>Booking '+escapeHtml(booking.code)+' · '+escapeHtml(booking.date)+'</small></span><span class="customer-notification-status">'+escapeHtml(booking.status)+'</span></button>';}).join('')+'</div><button class="customer-notification-all" type="button" data-customer-notification>View all bookings</button>':'<p class="customer-notification-empty">Booking updates will appear here.</p>');
}
function customerColorOptions(modelName, selectedColor){
  var model=MODELS.filter(function(entry){return entry.name===modelName;})[0];
  var available=model ? model.colors : ['Black'];
  return '<div class="color-picker" role="group" aria-label="Choose '+escapeHtml(modelName)+' color">'+available.map(function(name){
    var selected = name===selectedColor, color=scooterColor(name);
    var count=availableScootersForColor(modelName,name).length;
    var availability=count+' available';
    return '<span class="color-choice"><button type="button" class="color-swatch'+(selected?' selected':'')+(count?'':' unavailable')+'" style="--swatch:'+color.swatch+'" aria-label="'+escapeHtml(name)+', '+availability+'" aria-pressed="'+selected+'" title="'+escapeHtml(name)+' · '+availability+'" data-model-color="'+escapeHtml(modelName)+'" data-color="'+escapeHtml(name)+'" '+(!count?'disabled':'')+'></button><small>'+count+'</small></span>';
  }).join('')+'</div>';
}
function scooterColorName(scooter){
  var model=MODELS.filter(function(entry){return entry.name===scooter.model;})[0];
  return scooter.color || (model ? model.colors[0] : 'Black');
}
function availableScootersForColor(modelName,colorName){
  return state.scooters.filter(function(scooter){
    return scooter.model===modelName && scooterColorName(scooter)===colorName &&
      scooter.status==='Available' && (scooter.battery==null || Number(scooter.battery)>=25);
  });
}
function availableScootersForModel(modelName){
  return state.scooters.filter(function(scooter){
    return scooter.model===modelName && scooter.status==='Available' &&
      (scooter.battery==null || Number(scooter.battery)>=25);
  });
}
function customerSelectedColor(modelName){
  var model=MODELS.filter(function(entry){return entry.name===modelName;})[0];
  if(!model) return 'Black';
  var selected=customerState.colors[modelName];
  if(selected && availableScootersForColor(modelName,selected).length) return selected;
  var firstAvailable=model.colors.filter(function(color){
    return availableScootersForColor(modelName,color).length>0;
  })[0];
  return firstAvailable || selected || model.colors[0];
}
function colorAvailabilityText(modelName,colorName){
  var count=availableScootersForColor(modelName,colorName).length;
  var total=availableScootersForModel(modelName).length;
  if(count) return colorName+' · '+count+' available';
  if(total) return colorName+' unavailable · '+total+' scooter(s) in other colors';
  return 'Currently unavailable';
}
function modelColorOptions(modelName){
  var model=MODELS.filter(function(entry){return entry.name===modelName;})[0];
  return model ? model.colors.map(function(color){
    return '<option value="'+escapeHtml(color)+'">'+escapeHtml(color)+'</option>';
  }).join('') : '<option value="Black">Black</option>';
}
function syncRegisterColors(){
  var modelName=document.getElementById('rfModel').value;
  var colorSelect=document.getElementById('rfColor');
  colorSelect.innerHTML=modelColorOptions(modelName);
}
function customerScooterCard(model, index){
  var colors = ['#dff3ed','#dfebf7','#f9e5df','#ece7f6','#f4ecd9','#e5efdd'];
  var tags = ['Light & efficient','Easy city riding','Everyday ride','Customer favorite','Comfort touring','Premium comfort','Adventure ready'];
  var selectedColor = customerSelectedColor(model.name);
  var selectedCount=availableScootersForColor(model.name,selectedColor).length;
  var availabilityClass=selectedCount?'is-available':'is-unavailable';
  var availabilityText=colorAvailabilityText(model.name,selectedColor);
  return '<article class="ride-card"><div class="ride-art" style="--ride-color:'+colors[index%colors.length]+'"><span class="ride-tag">'+tags[index%tags.length]+'</span><span class="ride-scooter" style="--scooter-color:'+scooterColor(selectedColor).icon+'">'+scooterIconInPin+'</span><img class="ride-photo" src="'+modelPhoto(model,selectedColor)+'" alt="'+escapeHtml(model.name)+' in '+escapeHtml(selectedColor)+'" onload="this.previousElementSibling.hidden=true" onerror="this.hidden=true"></div><div class="ride-info"><div><strong>'+escapeHtml(model.name)+'</strong><span>Automatic · 2 helmets included</span></div><div class="ride-rate"><strong>₱'+model.rate+'</strong><span>/ 24 hrs</span></div></div><div class="ride-availability '+availabilityClass+'" aria-live="polite">'+availabilityText+'</div><div class="ride-card-options"><span>Colors · available units</span>'+customerColorOptions(model.name,selectedColor)+'</div><button type="button" class="ride-action" data-view-model="'+escapeHtml(model.name)+'">View details <span>›</span></button></article>';
}
function renderModelDetails(model){
  var weeklyRate=Math.round(model.rate*7*.8), monthlyRate=Math.round(model.rate*30*.57);
  var selectedColor=customerSelectedColor(model.name);
  var availableCount=availableScootersForColor(model.name,selectedColor).length;
  var specs=[['Engine',model.specs.engine],['Top speed',model.specs.topSpeed],['Fuel tank',model.specs.fuelTank],['Weight',model.specs.weight],['Transmission',model.specs.transmission],['Model year',model.specs.year]];
  var included=['Insurance included','Maintenance covered','24/7 WhatsApp support','Delivery available','Helmet included','Full tank on pickup'];
  var message=encodeURIComponent('Hi, I would like to ask about renting the '+model.name+'.');
  return '<section class="model-detail">'+
    '<button type="button" class="model-back" data-model-back>‹ Back to scooters</button>'+
    '<header class="model-detail-heading"><span class="model-make">'+escapeHtml(model.name.split(' ')[0])+'</span><h1>'+escapeHtml(model.name.replace(/^\S+\s/,''))+'</h1>'+
      '<p>'+escapeHtml(model.specs.engine)+' · Automatic transmission</p><p class="model-description">'+escapeHtml(model.description)+'</p>'+
      '<p class="model-detail-availability '+(availableCount?'is-available':'is-unavailable')+'">'+escapeHtml(colorAvailabilityText(model.name,selectedColor))+'</p>'+
      '<div class="model-detail-colors"><strong>Choose color</strong>'+customerColorOptions(model.name,selectedColor)+'</div></header>'+
    '<section class="detail-panel pricing-panel"><h2>Pricing</h2><div class="detail-pricing"><div class="price-option selected"><span>Per day</span><strong>₱'+model.rate.toLocaleString()+'</strong></div><div class="price-option"><span>Per week</span><strong>₱'+weeklyRate.toLocaleString()+'</strong><small>Save 20%</small></div><div class="price-option"><span>Per month</span><strong>₱'+monthlyRate.toLocaleString()+'</strong><small>Save 43%</small></div></div></section>'+
    '<section class="detail-panel"><h2>Specs</h2><div class="model-spec-grid">'+specs.map(function(item){return '<div class="model-spec"><span>'+escapeHtml(item[0])+'</span><strong>'+escapeHtml(item[1])+'</strong></div>';}).join('')+'</div></section>'+
    '<section class="detail-panel"><h2>Features</h2><ul class="model-feature-list">'+model.features.map(function(feature){return '<li>'+escapeHtml(feature)+'</li>';}).join('')+'</ul></section>'+
    '<section class="detail-panel"><h2>What\'s included</h2><ul class="model-included-list">'+included.map(function(item){return '<li>'+escapeHtml(item)+'</li>';}).join('')+'</ul></section>'+
    '<div class="model-detail-actions"><button type="button" class="customer-primary" data-detail-book="'+escapeHtml(model.name)+'" '+(!availableCount?'disabled':'')+'>'+(availableCount?'Book this scooter · ₱'+model.rate+'/day':'Currently unavailable')+'</button><a class="customer-secondary" href="https://wa.me/639458696645?text='+message+'" target="_blank" rel="noopener">Ask on WhatsApp</a></div>'+
    '<p class="model-color-note">Selected color: '+escapeHtml(selectedColor)+' · Rental year may vary by unit.</p></section>';
}
function customerBookingMarkup(){
  if(!customerState.bookings.length){
    return '<div class="empty-bookings"><span class="empty-icon">'+ICON.calendar+'</span><h3>No rides booked yet</h3><p>Your reservations will appear here after you book a scooter.</p><button type="button" class="customer-primary" data-customer-page="rides">Find a scooter</button></div>';
  }
  return '<div class="customer-booking-list">'+customerState.bookings.map(function(booking){
    return '<article class="customer-booking"><span class="booking-scooter">'+ICON.scooterSmall+'</span><div class="customer-booking-main"><strong>'+escapeHtml(booking.model)+' · '+escapeHtml(booking.color)+'</strong><span>'+escapeHtml(booking.date)+' · '+booking.days+' '+(booking.days===1?'day':'days')+' · '+escapeHtml(booking.deliveryLabel || 'Self pick-up')+'</span><span>Payment · '+escapeHtml(booking.paymentStatus||'Pay on pick-up')+'</span></div><span class="customer-status">'+escapeHtml(booking.status)+'</span><strong class="customer-booking-price">₱'+booking.total.toLocaleString()+'</strong></article>';
  }).join('')+'</div>';
}
function checkoutDays(){
  if(!customerState.checkout) return 1;
  var start = new Date(customerState.checkout.pickupDate+'T00:00:00');
  var end = new Date(customerState.checkout.returnDate+'T00:00:00');
  return Math.max(1,Math.ceil((end-start)/86400000));
}
function checkoutTotal(){
  var checkout = customerState.checkout;
  if(!checkout) return 0;
  return checkout.model.rate*checkoutDays();
}
function beginCustomerReservation(modelName){
  var model=MODELS.filter(function(entry){return entry.name===modelName;})[0];
  if(!model) return;
  var selectedColor=customerSelectedColor(modelName);
  if(!availableScootersForColor(modelName,selectedColor).length){
    toast(modelName+' in '+selectedColor+' is currently unavailable. Please choose another color or scooter.');
    customerNav('rides');
    return;
  }
  var start=new Date(); start.setDate(start.getDate()+1);
  var end=new Date(start); end.setDate(end.getDate()+1);
  var toISO=function(date){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');};
  customerState.checkout={model:model,color:selectedColor,step:1,minDate:toISO(start),pickupDate:toISO(start),returnDate:toISO(end),pickupTime:'09:00',returnTime:'09:00',deliveryLabel:'Self pick-up',deliveryFee:0,name:customerState.name,email:customerState.email,phone:customerState.phone,payment:'cash'};
  customerNav('reserve');
}
function checkoutStepper(){
  var labels=['Vehicle & Dates','Your Details','Payment','Contract'];
  return '<div class="booking-stepper">'+labels.map(function(label,index){
    var number=index+1, state=number<customerState.checkout.step?'complete':number===customerState.checkout.step?'current':'';
    return '<div class="booking-step '+state+'"><span class="step-number">'+(number<customerState.checkout.step?'✓':number)+'</span><span>'+label+'</span></div>';
  }).join('')+'</div>';
}
function renderCheckout(){
  var checkout=customerState.checkout, model=checkout.model, step=checkout.step, days=checkoutDays();
  var body='';
  if(step===1){
    body='<h2>Choose your scooter & dates</h2><div class="booking-selected-scooter"><span class="booking-scooter">'+ICON.scooterSmall+'</span><div><strong>'+escapeHtml(model.name)+'</strong><span>Automatic · 2 helmets included</span></div><strong>₱'+model.rate+' / day</strong></div><label class="booking-field">Scooter color'+customerColorOptions(model.name,checkout.color)+'</label><div class="booking-field-grid"><label class="booking-field">Pickup date<input type="date" min="'+checkout.minDate+'" value="'+checkout.pickupDate+'" data-checkout-field="pickupDate"></label><label class="booking-field">Pickup time<input type="time" value="'+checkout.pickupTime+'" data-checkout-field="pickupTime"></label><label class="booking-field">Return date<input type="date" min="'+checkout.pickupDate+'" value="'+checkout.returnDate+'" data-checkout-field="returnDate"></label><label class="booking-field">Return time<input type="time" value="'+checkout.returnTime+'" data-checkout-field="returnTime"></label></div><p class="booking-hint">Choose the exact pick-up and return time for your ride.</p>';
  }else if(step===2){
    body='<h2>Your contact details</h2><p class="booking-hint">We will use these details to confirm your reservation.</p><div class="booking-field-grid"><label class="booking-field">Full name<input type="text" value="'+escapeHtml(checkout.name)+'" data-checkout-field="name" required></label><label class="booking-field">Phone number<input type="tel" value="'+escapeHtml(checkout.phone)+'" data-checkout-field="phone" required></label><label class="booking-field field-full">Email address<input type="email" value="'+escapeHtml(checkout.email)+'" data-checkout-field="email" required></label></div>';
  }else if(step===3){
    body='<h2>Choose your payment method</h2><div class="payment-options"><label class="payment-option'+(checkout.payment==='cash'?' selected':'')+'"><input type="radio" name="payment" value="cash" '+(checkout.payment==='cash'?'checked':'')+'><span><strong>Cash on pick-up</strong><small>Pay at the Jones Scooter garage</small></span></label><label class="payment-option'+(checkout.payment==='gcash'?' selected':'')+'"><input type="radio" name="payment" value="gcash" '+(checkout.payment==='gcash'?'checked':'')+'><span><strong>GCash · manual transfer</strong><small>Ask the branch for payment instructions</small></span></label></div><p class="booking-hint">Online payments are not processed here. Staff must verify manual transfers and record payment in the admin dashboard.</p>';
  }else{
    body='<h2>Review your rental contract</h2><div class="contract-summary"><strong>'+escapeHtml(model.name)+' · '+escapeHtml(checkout.color)+'</strong><span>'+escapeHtml(checkout.pickupDate)+' at '+escapeHtml(checkout.pickupTime)+' to '+escapeHtml(checkout.returnDate)+' at '+escapeHtml(checkout.returnTime)+'</span><span>Self pick-up at Jones Scooter garage</span><span>Payment: '+(checkout.payment==='gcash'?'GCash':'Cash on pick-up')+'</span><p>Renter agrees to return the scooter in good condition and follow all road-safety requirements. The branch will contact you to confirm availability and final details.</p></div><label class="contract-accept"><input type="checkbox" id="acceptContract"> <span>I have reviewed and agree to the rental terms.</span></label>';
  }
  var previous=step>1?'<button type="button" class="customer-secondary" data-flow-back>Back</button>':'';
  var next=step<4?'<button type="button" class="customer-primary" data-flow-next>Continue <span>›</span></button>':'<button type="button" class="customer-primary" data-flow-submit>Confirm reservation <span>›</span></button>';
  return checkoutStepper()+'<div class="checkout-layout"><section class="checkout-panel">'+body+'<div class="checkout-actions">'+previous+next+'</div></section><aside class="checkout-summary"><div class="summary-vehicle"><span class="summary-scooter"><span>'+ICON.scooterSmall+'</span><img src="'+modelPhoto(model,checkout.color)+'" alt="'+escapeHtml(model.name)+' in '+escapeHtml(checkout.color)+'" onload="this.previousElementSibling.hidden=true" onerror="this.hidden=true"></span><span><strong>'+escapeHtml(model.name)+'</strong><small>'+escapeHtml(checkout.color)+' · Automatic</small></span></div><div class="summary-line"><span>Duration</span><strong>'+days+' '+(days===1?'day':'days')+'</strong></div><div class="summary-line"><span>Rental price</span><strong>₱'+(model.rate*days).toLocaleString()+'</strong></div><div class="summary-line included"><span>Collection</span><strong>Self pick-up at store</strong></div><div class="summary-line included"><span>Insurance & helmets</span><strong>Included</strong></div><div class="summary-total"><span>Total</span><strong>₱'+checkoutTotal().toLocaleString()+'</strong></div><p>+ ₱2,500 refundable deposit on pick-up.</p><a class="summary-support" href="tel:09458696645">Questions? Call us: 0945 869 6645</a></aside></div>';
}
function renderCustomerPage(){
  var content = document.getElementById('customerContent');
  var titles = {home:'Your next ride is ready.',rides:'Choose your ride',bookings:'Bookings & rentals',profile:'My profile'};
  document.querySelectorAll('[data-customer-page]').forEach(function(button){
    button.classList.toggle('active', button.dataset.customerPage===customerState.page || ((customerState.page==='reserve'||customerState.page==='details') && button.dataset.customerPage==='rides'));
  });
  if(customerState.page==='home'){
    content.innerHTML = '<section class="customer-hero"><div class="customer-hero-copy"><span class="customer-kicker">EXPLORE LAPU-LAPU CITY</span><h1>'+titles.home+'</h1><p>Clean, safe and budget-friendly scooters from ₱400 per day. Book in minutes and ride with confidence.</p><div class="customer-hero-actions"><button type="button" class="customer-primary" data-customer-page="rides">Find a scooter <span>›</span></button><button type="button" class="customer-secondary" data-customer-page="bookings">View my bookings</button></div><div class="customer-highlights"><span><strong>6</strong> scooter models</span><span><strong>7 AM</strong> weekend opening</span><span><strong>Local</strong> rider support</span></div></div><div class="customer-hero-art"><div class="hero-rental-note"><span>RATES FROM</span><strong>₱400</strong><small>PER 24 HOURS</small></div><div class="hero-scooter">'+scooterIconInPin+'</div><span class="hero-location">CASANTA SOONG · CEBU</span></div></section><section class="customer-section"><div class="customer-section-head"><div><span class="customer-kicker">POPULAR RIDES</span><h2>Pick your perfect scooter</h2></div><button type="button" class="customer-text-link" data-customer-page="rides">View all ›</button></div><div class="ride-grid">'+MODELS.slice(0,3).map(customerScooterCard).join('')+'</div></section><section class="customer-benefits"><div><strong>Fast booking</strong><span>Reserve in under two minutes</span></div><div><strong>Well maintained</strong><span>Inspected before every ride</span></div><div><strong>Local support</strong><span>Help when you need it</span></div></section>';
  }else if(customerState.page==='rides'){
    content.innerHTML = '<section class="customer-page-heading"><div><span class="customer-kicker">AVAILABLE TODAY</span><h1>'+titles.rides+'</h1><p>Choose a scooter and color to begin your reservation. Rentals include two helmets and a safety check.</p></div></section><div class="ride-grid ride-grid-all">'+MODELS.map(customerScooterCard).join('')+'</div>';
  }else if(customerState.page==='reserve'){
    content.innerHTML=renderCheckout();
  }else if(customerState.page==='details'){
    var detailModel=MODELS.filter(function(entry){return entry.name===customerState.selectedModel;})[0];
    if(!detailModel){customerState.page='rides';content.innerHTML='<div class="ride-grid ride-grid-all">'+MODELS.map(customerScooterCard).join('')+'</div>';}
    else content.innerHTML=renderModelDetails(detailModel);
  }else if(customerState.page==='bookings'){
    content.innerHTML = '<section class="customer-page-heading"><div><span class="customer-kicker">MY RIDES</span><h1>'+titles.bookings+'</h1><p>Review your reservations and rental details.</p></div><button type="button" class="customer-primary" data-customer-page="rides">Book another ride</button></section>'+customerBookingMarkup();
  }else{
    var initials = customerState.name.split(/\s+/).map(function(part){return part.charAt(0);}).join('').slice(0,2).toUpperCase();
    content.innerHTML = '<section class="customer-page-heading"><div><span class="customer-kicker">ACCOUNT</span><h1>'+titles.profile+'</h1><p>Manage your contact information and ride preferences.</p></div></section><div class="profile-layout"><section class="profile-summary"><div class="profile-avatar">'+escapeHtml(initials)+'</div><h2>'+escapeHtml(customerState.name)+'</h2><p>Jones Scooter customer account</p><div class="profile-stats"><div><strong>'+customerState.bookings.length+'</strong><span>Total rides</span></div><div><strong>5.0</strong><span>Rider rating</span></div></div></section><section class="profile-details"><h2>Contact details</h2><div class="profile-detail"><span>Email</span><strong>'+escapeHtml(customerState.email)+'</strong></div><div class="profile-detail"><span>Phone</span><strong>'+escapeHtml(customerState.phone)+'</strong></div><div class="profile-detail"><span>Branch</span><strong>Casanta Soong, Lapu-Lapu City</strong></div><button type="button" class="customer-secondary" id="profileLogoutBtn">Log out of customer account</button></section></div>';
  }
  var modelCount=content.querySelector('.customer-highlights strong');
  if(modelCount) modelCount.textContent=MODELS.length;
  content.querySelectorAll('[data-customer-page]').forEach(function(button){
    button.addEventListener('click', function(){ customerNav(button.dataset.customerPage); });
  });
  updateCustomerNotifications();
  content.querySelectorAll('[data-model-color]').forEach(function(button){
    button.addEventListener('click',function(){
      var modelName=button.dataset.modelColor, color=button.dataset.color;
      customerState.colors[modelName]=color;
      if(button.closest('.booking-field')){
        customerState.checkout.color=color;
      }
      renderCustomerPage();
    });
  });
  content.querySelectorAll('[data-reserve-model]').forEach(function(button){
    button.addEventListener('click', function(){
      beginCustomerReservation(button.dataset.reserveModel);
    });
  });
  content.querySelectorAll('[data-view-model]').forEach(function(button){
    button.addEventListener('click',function(){customerState.selectedModel=button.dataset.viewModel;customerNav('details');});
  });
  var backToModels=content.querySelector('[data-model-back]');
  if(backToModels) backToModels.addEventListener('click',function(){customerNav('rides');});
  var detailBook=content.querySelector('[data-detail-book]');
  if(detailBook) detailBook.addEventListener('click',function(){beginCustomerReservation(detailBook.dataset.detailBook);});
  content.querySelectorAll('[data-checkout-field]').forEach(function(input){
    input.addEventListener('input',function(){
      customerState.checkout[input.dataset.checkoutField]=input.value;
    });
    input.addEventListener('change',function(){
      customerState.checkout[input.dataset.checkoutField]=input.value;
      if(input.dataset.checkoutField==='pickupDate'){
        var returnInput=content.querySelector('[data-checkout-field="returnDate"]');
        returnInput.min=input.value;
        if(returnInput.value<input.value){returnInput.value=input.value;customerState.checkout.returnDate=input.value;}
      }
      if(content.querySelector('.checkout-summary')) renderCustomerPage();
    });
  });
  content.querySelectorAll('input[name="payment"]').forEach(function(input){
    input.addEventListener('change',function(){customerState.checkout.payment=input.value;renderCustomerPage();});
  });
  var nextStep=content.querySelector('[data-flow-next]');
  if(nextStep) nextStep.addEventListener('click',function(){
    var flow=customerState.checkout, valid=true;
    if(flow.step===1) valid=flow.pickupDate>=flow.minDate && flow.returnDate>=flow.pickupDate && flow.pickupTime && flow.returnTime;
    if(flow.step===2) valid=Boolean(flow.name.trim()&&flow.phone.trim()&&flow.email.trim());
    if(!valid){toast('Please complete the required booking details.');return;}
    flow.step++; renderCustomerPage();
  });
  var previousStep=content.querySelector('[data-flow-back]');
  if(previousStep) previousStep.addEventListener('click',function(){customerState.checkout.step--;renderCustomerPage();});
  var submitBooking=content.querySelector('[data-flow-submit]');
  if(submitBooking) submitBooking.addEventListener('click',function(){
    var flow=customerState.checkout;
    if(!availableScootersForColor(flow.model.name,flow.color).length){
      customerState.checkout=null;
      customerNav('rides');
      toast(flow.model.name+' in '+flow.color+' is no longer available. Please choose another color or scooter.');
      return;
    }
    var accepted=document.getElementById('acceptContract').checked;
    if(!accepted){toast('Please agree to the rental terms before confirming.');return;}
    var date=new Date(flow.pickupDate+'T00:00:00');
    var bookingCode=uid('BK');
    var booking={code:bookingCode,customer:customerState.name,customerEmail:customerState.email,customerPhone:customerState.phone,scooterId:'',model:flow.model.name,color:flow.color,days:checkoutDays(),time:flow.pickupTime,day:flow.pickupDate,pickupDate:flow.pickupDate,returnDate:flow.returnDate,returnTime:flow.returnTime,status:'Pending',price:checkoutTotal(),source:'Online customer',deliveryLabel:'Self pick-up',deliveryFee:0,paymentMethod:flow.payment==='gcash'?'GCash':'Cash on pick-up',paymentStatus:flow.payment==='gcash'?'Awaiting manual confirmation':'Pay on pick-up'};
    state.bookings.unshift(booking);
    ensureAdminCustomer({name:customerState.name,email:customerState.email,phone:customerState.phone});
    customerState.bookings.unshift({code:bookingCode,model:flow.model.name,color:flow.color,days:checkoutDays(),date:date.toLocaleDateString(undefined,{day:'numeric',month:'short'}),status:'Pending',paymentStatus:booking.paymentStatus,deliveryLabel:flow.deliveryLabel,total:checkoutTotal()});
    customerState.unreadNotifications++;
    customerState.checkout=null;
    customerNav('bookings');toast('Reservation request sent. The branch will contact you to confirm.');
  });
  var profileLogout = document.getElementById('profileLogoutBtn');
  if(profileLogout) profileLogout.addEventListener('click', leaveCustomerApp);
}
function setAuthMode(mode){
  var isSignIn = mode==='signin';
  document.getElementById('authTitle').textContent = isSignIn ? 'Login' : 'Create your account';
  document.getElementById('authIntro').textContent = isSignIn ? 'Sign in to manage your rides and bookings.' : 'Join Jones Scooter and reserve your next ride.';
  document.getElementById('signInForm').hidden = !isSignIn;
  document.getElementById('signUpForm').hidden = isSignIn;
  document.getElementById('customerAuthCard').classList.toggle('signup-mode',!isSignIn);
  var signInPrompt=document.querySelector('.customer-signin-prompt');
  var signUpPrompt=document.querySelector('.customer-signup-prompt');
  signInPrompt.setAttribute('aria-hidden',isSignIn?'false':'true');
  signUpPrompt.setAttribute('aria-hidden',isSignIn?'true':'false');
  signInPrompt.querySelector('button').tabIndex=isSignIn?0:-1;
  signUpPrompt.querySelector('button').tabIndex=isSignIn?-1:0;
  document.querySelectorAll('[data-auth-mode]').forEach(function(tab){
    var selected = tab.dataset.authMode===mode;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
}
function openCustomerPortal(mode){
  customerPortal.hidden = false;
  document.getElementById('adminLoginScreen').hidden = true;
  document.body.classList.add('auth-visible');
  document.getElementById('backToAdminBtn').textContent=activeAdminAccount?'← Back to dashboard':'← Back to staff sign in';
  setAuthMode(mode);
}
document.getElementById('customerLoginBtn').addEventListener('click', function(){openCustomerPortal('signin');});
document.getElementById('customerSignUpBtn').addEventListener('click', function(){openCustomerPortal('signup');});
document.getElementById('backToAdminBtn').addEventListener('click', function(){
  leaveCustomerApp();
});
document.querySelectorAll('[data-auth-mode]').forEach(function(tab){
  tab.addEventListener('click', function(){ setAuthMode(tab.dataset.authMode); });
});
document.getElementById('signInForm').addEventListener('submit', function(event){
  event.preventDefault();
  var form = event.currentTarget;
  enterCustomerApp({email:form.elements.email.value.trim()});
});
document.getElementById('signUpForm').addEventListener('submit', function(event){
  event.preventDefault();
  var form = event.currentTarget;
  enterCustomerApp({name:form.elements.name.value.trim(),email:form.elements.email.value.trim(),phone:form.elements.phone.value.trim()});
});
document.getElementById('customerLogoutBtn').addEventListener('click', leaveCustomerApp);
document.getElementById('customerNotificationBtn').addEventListener('click',function(){
  customerState.notificationOpen=!customerState.notificationOpen;
  if(customerState.notificationOpen) customerState.unreadNotifications=0;
  updateCustomerNotifications();
});
document.getElementById('customerNotificationPanel').addEventListener('click',function(event){
  if(event.target.closest('[data-customer-notification]')){
    customerState.notificationOpen=false;
    customerNav('bookings');
  }
});
document.getElementById('customerScrollTop').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
window.addEventListener('scroll',function(){
  document.getElementById('customerScrollTop').hidden=document.getElementById('customerApp').hidden || window.scrollY<280;
});
document.querySelectorAll('.customer-nav [data-customer-page]').forEach(function(button){
  button.addEventListener('click', function(){ customerNav(button.dataset.customerPage); });
});
document.getElementById('forgotPasswordBtn').addEventListener('click', function(){
  toast('For account help, call 0945 869 6645.');
});

var now = function(){ return Date.now(); };
function uid(prefix){ return prefix + "-" + Math.floor(1000 + Math.random()*9000); }
function fmtMoney(n){ return "₱" + Math.round(n).toLocaleString(); }
function fmtK(n){ return n>=1000 ? "₱" + (n/1000).toFixed(1) + "K" : fmtMoney(n); }
function cls(status){ return status.replace(/\s+/g,''); }

var MODELS = [
  {name:"Honda Beat Premium", rate:400, colors:["Black","White","Grey & Black"], photos:{"Black":"images/Honda%20Beat%20Premium%20Black.jpg","White":"images/Honda%20Beat%20Premium%20White.jpg","Grey & Black":"images/Honda%20Beat%20Premium%20Black.jpg"}, description:"A lightweight, fuel-efficient scooter made for quick city trips and easy parking.", specs:{engine:"110cc",topSpeed:"95 km/h",fuelTank:"3.7 L",weight:"92 kg",transmission:"Automatic",year:"2023"}, features:["PGM-FI fuel injection","LED headlight","USB charging port","Under-seat storage","Side-stand engine cut-off"]},
  {name:"Yamaha Mio i 125", rate:500, colors:["Black","Light Blue & White"], photos:{"Black":"images/yamaha-mio-gear-slant-front-view-full-image-360394.webp","Light Blue & White":"images/yamaha-mio-gear-slant-front-view-full-image-360394.webp"}, description:"A compact 125cc automatic with a comfortable ride for everyday errands around the city.", specs:{engine:"125cc",topSpeed:"100 km/h",fuelTank:"4.2 L",weight:"94 kg",transmission:"Automatic CVT",year:"Varies by unit"}, features:["Fuel-injected 125cc engine","Easy automatic operation","Under-seat storage","Comfortable upright seating","Compact city-friendly frame"]},
  {name:"Yamaha Mio Gear 125", rate:500, colors:["Black"], photos:{"Black":"images/yamaha-mio-gear-slant-front-view-full-image-360394.webp"}, description:"A practical everyday scooter with a sturdy feel, automatic riding and useful storage.", specs:{engine:"125cc",topSpeed:"95 km/h",fuelTank:"4.2 L",weight:"95 kg",transmission:"Automatic CVT",year:"Varies by unit"}, features:["Fuel-injected 125cc engine","Automatic CVT transmission","Under-seat storage","Comfortable step-through design","Easy city maneuvering"]},
  {name:"Honda Click 125i V3", rate:500, colors:["Red","Maroon","Blue","Black","Grey","White"], photos:{"Red":"images/honda-click-v3-price-philippines-featured.webp","Maroon":"images/honda-click-v3-price-philippines-featured.webp","Blue":"images/honda-click-v3-price-philippines-featured.webp","Black":"images/honda-click-v3-price-philippines-featured.webp","Grey":"images/honda-click-v3-price-philippines-featured.webp","White":"images/honda-click-v3-price-philippines-featured.webp"}, description:"A responsive 125cc scooter that balances everyday comfort with a confident, sporty ride.", specs:{engine:"125cc",topSpeed:"105 km/h",fuelTank:"5.5 L",weight:"111 kg",transmission:"Automatic V-Matic",year:"Varies by unit"}, features:["PGM-FI fuel injection","Automatic V-Matic transmission","LED lighting","Under-seat storage","Combined braking system"]},
  {name:"Yamaha NMAX 2020 V1", rate:700, colors:["Black"], photos:{"Black":"images/20260220103434699838ba83e8f.webp"}, description:"A maxi-style scooter with a relaxed riding position and extra comfort for longer trips.", specs:{engine:"155cc",topSpeed:"115 km/h",fuelTank:"7.1 L",weight:"127 kg",transmission:"Automatic CVT",year:"2020"}, features:["155cc liquid-cooled engine","Comfortable maxi-scooter seating","Under-seat storage","ABS braking","Automatic CVT transmission"]},
  {name:"Yamaha NMAX Techmax V3", rate:850, colors:["Grey"], photos:{"Grey":"images/2026030508410769a941a3a9d8c.webp"}, description:"A premium maxi-scooter suited to comfortable city riding and longer coastal routes.", specs:{engine:"155cc",topSpeed:"125 km/h",fuelTank:"7.1 L",weight:"131 kg",transmission:"Automatic CVT",year:"Varies by unit"}, features:["155cc liquid-cooled engine","Premium maxi-scooter comfort","Under-seat storage","ABS braking","Automatic CVT transmission"]},
  {name:"Honda ADV 160", rate:900, colors:["Black"], photos:{"Black":"images/HONDA%20ADV%20160.png"}, description:"A versatile 160cc scooter with upright ergonomics for city streets and weekend exploring.", specs:{engine:"157cc",topSpeed:"115 km/h",fuelTank:"8.1 L",weight:"133 kg",transmission:"Automatic",year:"Varies by unit"}, features:["157cc liquid-cooled engine","Upright adventure-style seating","Under-seat storage","ABS braking","Automatic transmission"]}
];
function rateFor(model){ var m = MODELS.filter(function(x){return x.name===model;})[0]; return m ? m.rate : 500; }

/* ---------------- state ---------------- */
var state = {
  page: "overview",
  fleetFilter: "All",
  bookingsFilter: "All",
  selectedUnit: null,
  notifRead: false,
  settings: { gps:true, lowBattery:true, newBooking:false },
  branch: { name:"Jones Scooter — Soong", address:"Casanta Soong, Lapu-Lapu City, 6015 Cebu", phone:"0945 869 6645", hours:"8:00 AM – 8:00 PM · Weekends from 7:00 AM" },
  baseline: { fleetTotal:117, fleetInUse:70, fleetAvailable:40, fleetAttention:7, custTotal:1244, custNew:37, todayBookings:83, activeNow:11, weekRevenue:40100, todayRevenue:15900 },
  scooters: [],
  bookings: [],
  customers: [],
  adminStaff: [],
  adminBranches: [],
  notifications: []
};
var activeAdminAccount = null;

function seed(){
  state.adminStaff = [
    {id:"ST-001", name:"Alex Jones", email:"admin@jonesscooter.demo", role:"Admin · Staff", branchId:"main", active:true}
  ];
  state.adminBranches = [];
  state.scooters = [
    {id:"JS-2104", model:"Honda Click 125i V3", color:"Red", status:"Available", battery:100, odo:0,    x:62, y:24, loc:"Casanta Soong"},
    {id:"JS-2048", model:"Yamaha Mio Gear 125", color:"Black", status:"Inuse",     battery:84,  odo:2481, x:35, y:33, loc:"Casanta Soong", speed:14},
    {id:"JS-1142", model:"Yamaha Mio i 125", color:"Black", status:"Inuse",     battery:67,  odo:1904, x:22, y:57, loc:"Mactan Newtown", speed:9},
    {id:"JS-0861", model:"Honda Beat Premium", color:"Black", status:"Available", battery:22,  odo:3122, x:70, y:72, loc:"ML. Quezon Ave."},
    {id:"JS-1904", model:"Yamaha NMAX 2020 V1", color:"Black", status:"Reserved", battery:100, odo:4806, x:45, y:68, loc:"Lapu-Lapu City"},
    {id:"JS-1772", model:"Yamaha NMAX Techmax V3", color:"Grey", status:"Available", battery:92,  odo:2765, x:15, y:20, loc:"Mactan Newtown"},
    {id:"JS-1630", model:"Honda ADV 160", color:"Black", status:"Maintenance", battery:48, odo:5109, x:78, y:40, loc:"Lapu-Lapu City"}
  ];

  state.bookings = [
    {code:"BK-1048", customer:"Maria Santos", scooterId:"JS-2048", model:"Yamaha Mio Gear 125", time:"9:00 AM", day:"Today", status:"Active", price:500, source:"On-site staff"},
    {code:"BK-1049", customer:"John Reyes", scooterId:"JS-1904", model:"Yamaha NMAX 2020 V1", time:"11:30 AM", day:"Today", status:"Confirmed", price:700, source:"On-site staff"},
    {code:"BK-1050", customer:"Anna Lim", scooterId:"JS-1630", model:"Honda ADV 160", time:"2:00 PM", day:"Today", status:"Pending", price:900, source:"Online customer", customerEmail:"anna.lim@example.com", customerPhone:"Not provided"},
    {code:"BK-1051", customer:"Paolo Cruz", scooterId:"JS-1142", model:"Yamaha Mio i 125", time:"8:00 AM", day:"Tomorrow", status:"Pending", price:500, source:"Online customer", customerEmail:"paolo.cruz@example.com", customerPhone:"Not provided"}
  ];

  state.customers = [
    {name:"Maria Santos", initials:"MS", status:"Riding now", rentals:12, ltv:8200},
    {name:"John Reyes", initials:"JR", status:"2 days ago", rentals:8, ltv:5600},
    {name:"Anna Lim", initials:"AL", status:"5 days ago", rentals:6, ltv:4100},
    {name:"Paolo Cruz", initials:"PC", status:"1 week ago", rentals:3, ltv:1800}
  ];

  state.notifications = [
    {color:"var(--red)", title:"Scooter battery low", sub:"JS-0861 · Battery below 25%"},
    {color:"var(--green)", title:"New booking received", sub:"Honda ADV 160 · 12 min ago"},
    {color:"var(--amber)", title:"Geofence warning", sub:"JS-0861 · 21 min ago"}
  ];
}
seed();

function findScooter(id){ return state.scooters.filter(function(s){ return s.id===id; })[0]; }

/* ---------------- derived stats ---------------- */
function fleetCounts(){
  var c = {Available:0, Reserved:0, Inuse:0, Maintenance:0};
  state.scooters.forEach(function(s){ c[cls(s.status)]++; });
  var attention = state.scooters.filter(function(s){ return s.status==='Maintenance'; }).length;
  return {
    total: state.baseline.fleetTotal + state.scooters.length,
    inUse: state.baseline.fleetInUse + c.Inuse,
    available: state.baseline.fleetAvailable + c.Available,
    attention: state.baseline.fleetAttention + attention,
    raw: c
  };
}
function bookingCounts(){
  var todayBookings = state.bookings.filter(function(b){ return b.day==='Today'; });
  var today = todayBookings.length;
  var todayValue = todayBookings.reduce(function(total,b){
    return total+(b.status==='Declined'?0:Number(b.price||0));
  },0);
  var active = state.bookings.filter(function(b){ return b.status==='Active'; }).length;
  var value = state.bookings.reduce(function(total,b){
    return total+(b.status==='Declined'?0:Number(b.price||0));
  },0);
  return {
    today: today,
    todayValue: todayValue,
    active: active,
    value: value
  };
}
function bookingPaymentStatus(booking){
  return booking.paymentStatus || (booking.paymentMethod==='GCash'?'Awaiting manual confirmation':'Pay on pick-up');
}
function paymentTotals(){
  return state.bookings.reduce(function(totals,booking){
    if(booking.status==='Declined') return totals;
    var amount=Number(booking.price||0);
    if(bookingPaymentStatus(booking)==='Paid') totals.received+=amount;
    else totals.outstanding+=amount;
    return totals;
  },{received:0,outstanding:0});
}
function customerCounts(){
  var repeat = state.customers.filter(function(customer){return Number(customer.rentals||0)>1;}).length;
  var rentals = state.customers.reduce(function(total,customer){return total+Number(customer.rentals||0);},0);
  var withBookings = state.customers.filter(function(customer){
    return state.bookings.some(function(booking){
      var sameEmail=customer.email && booking.customerEmail &&
        booking.customerEmail.toLowerCase()===customer.email.toLowerCase();
      return sameEmail || booking.customer.toLowerCase()===customer.name.toLowerCase();
    });
  }).length;
  return {
    total: state.customers.length,
    returning: repeat,
    rentals: rentals,
    withBookings: withBookings
  };
}

/* ---------------- toast ---------------- */
function toast(msg){
  var stack = document.getElementById('toastStack');
  var el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  stack.appendChild(el);
  setTimeout(function(){ el.style.transition='opacity .3s'; el.style.opacity='0'; setTimeout(function(){el.remove();},300); }, 4800);
}

/* ---------------- date ---------------- */
(function setDate(){
  var d = new Date();
  var days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  document.getElementById('dateLabel').textContent = days[d.getDay()]+", "+d.getDate()+" "+months[d.getMonth()];
  var h = new Date().getHours();
  document.getElementById('greeting').textContent = "Good " + (h<12?"morning":h<18?"afternoon":"evening") + ", Alex";
})();

/* ================= NAVIGATION ================= */
var pages = ["overview","tracking","fleet","bookings","customers","reports","admin","settings"];
var pageTitles = {overview:"Overview", tracking:"Location preview", fleet:"Fleet", bookings:"Bookings", customers:"Customers", reports:"Reports", admin:"Main admin", settings:"Settings"};
var ADMIN_DEMO_ACCOUNTS = [
  {key:"main",email:"mainadmin@jonesscooter.demo",password:"owner123",name:"Main Admin",role:"Main administrator",pages:pages.slice()},
  {key:"staff",email:"admin@jonesscooter.demo",password:"staff123",name:"Alex Jones",role:"Admin · staff",pages:["overview","fleet","bookings","customers","reports"]}
];

function showAdminLogin(){
  activeAdminAccount=null;
  document.getElementById('adminApp').hidden=true;
  document.getElementById('adminApp').classList.remove('main-admin-dark');
  document.body.classList.remove('main-admin-dark');
  document.getElementById('adminLoginScreen').hidden=false;
  document.getElementById('adminLoginForm').reset();
  document.getElementById('adminLoginError').hidden=true;
}
function startAdminSession(account){
  activeAdminAccount=account;
  document.getElementById('adminLoginScreen').hidden=true;
  document.getElementById('adminApp').hidden=false;
  document.getElementById('adminApp').classList.toggle('main-admin-dark',account.key==='main');
  document.body.classList.toggle('main-admin-dark',account.key==='main');
  document.getElementById('adminUserName').textContent=account.name;
  document.getElementById('adminUserRole').textContent=account.role;
  document.getElementById('adminUserAvatar').firstChild.textContent=account.name.split(/\s+/).map(function(part){return part.charAt(0);}).join('').slice(0,2).toUpperCase();
  var hour=new Date().getHours();
  document.getElementById('greeting').textContent=(hour<12?'Good morning':hour<18?'Good afternoon':'Good evening')+', '+account.name.split(/\s+/)[0];
  document.querySelectorAll('[data-page]').forEach(function(link){
    link.hidden=account.pages.indexOf(link.dataset.page)===-1;
  });
  goPage('overview');
}
document.querySelectorAll('[data-demo-account]').forEach(function(button){
  button.addEventListener('click',function(){
    var account=ADMIN_DEMO_ACCOUNTS.filter(function(item){return item.key===button.dataset.demoAccount;})[0];
    if(!account)return;
    document.getElementById('adminLoginEmail').value=account.email;
    document.getElementById('adminLoginPassword').value=account.password;
    document.getElementById('adminLoginError').hidden=true;
    document.getElementById('adminLoginForm').requestSubmit();
  });
});
document.getElementById('adminLoginForm').addEventListener('submit',function(event){
  event.preventDefault();
  var email=document.getElementById('adminLoginEmail').value.trim().toLowerCase();
  var password=document.getElementById('adminLoginPassword').value;
  var account=ADMIN_DEMO_ACCOUNTS.filter(function(item){return item.email===email&&item.password===password;})[0];
  if(account&&account.key==='staff'&&!state.adminStaff.some(function(staff){return staff.email.toLowerCase()===account.email&&staff.active;})){
    account=null;
  }
  if(!account){
    var error=document.getElementById('adminLoginError');
    error.textContent='Unable to sign in. Check your credentials or choose an active demo account below.';
    error.hidden=false;
    return;
  }
  startAdminSession(account);
});
document.getElementById('adminLogoutBtn').addEventListener('click',showAdminLogin);

function goPage(p){
  if(!activeAdminAccount||activeAdminAccount.pages.indexOf(p)===-1){
    toast('This account does not have access to that page.');
    return;
  }
  state.page = p;
  document.querySelectorAll('.side-link[data-page]').forEach(function(b){ b.classList.toggle('active', b.dataset.page===p); });
  pages.forEach(function(k){ document.getElementById('page-'+k).classList.toggle('active', k===p); });
  document.getElementById('pageTitle').textContent = pageTitles[p];
  document.getElementById('searchInline').classList.remove('open');
  renderAll();
}
document.querySelectorAll('[data-page]').forEach(function(el){
  el.addEventListener('click', function(){ goPage(el.dataset.page); });
});

/* ================= ICONS ================= */
var ICON = {
  fleet:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="18" r="2.3"/><circle cx="17" cy="18" r="2.3"/><path d="M6 18h7l1.6-6.4H16"/><path d="M10.5 8.5H14l1 3.1"/><path d="M10.5 8.5L12 5H15"/></svg>',
  pulse:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l2 8 4-16 2 8h6"/></svg>',
  bolt:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  cash:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>',
  users:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.3 4.6 2.5 4.6 5.8"/></svg>',
  star:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3-5.6-3.3-5.6 3.3 1.4-6.3-4.8-4.3 6.4-.6z"/></svg>',
  calendar:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  clock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  chart:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
  scooterSmall:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="18" r="2.3"/><circle cx="17" cy="18" r="2.3"/><path d="M6 18h7l1.6-6.4H16"/><path d="M10.5 8.5H14l1 3.1"/><path d="M10.5 8.5L12 5H15"/></svg>',
  chev:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg>',
  bulb:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a6 6 0 00-3 11.2c.6.4 1 1.1 1 1.8h4c0-.7.4-1.4 1-1.8A6 6 0 0012 2z"/></svg>',
  trend:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  zap:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>'
};

/* ================= MAP RENDERING ================= */
var MAP_CFG = {
  labels:[
    {t:"MACTAN NEWTOWN", x:6, y:12},
    {t:"CASANTA SOONG", x:38, y:47},
    {t:"LAPU-LAPU CITY", x:70, y:82}
  ]
};
var scooterIconInPin = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.3"><circle cx="6" cy="18" r="2.1"/><circle cx="17" cy="18" r="2.1"/><path d="M6 18h7l1.6-6.4H16"/><path d="M10.5 8.5H14l1 3.1"/><path d="M10.5 8.5L12 5H15"/></svg>';

function statusKind(s){
  if(s.status==='Maintenance' || (s.battery!=null && s.battery<25)) return 'attention';
  if(s.status==='Inuse') return 'active';
  return 'available';
}

function renderMap(containerId, legendId){
  var el = document.getElementById(containerId);
  if(!el) return;
  var html = '<div class="map-zoom"><button data-zoom="in">+</button><button data-zoom="out">−</button></div>';
  MAP_CFG.labels.forEach(function(l){ html += '<span class="zone-lbl" style="left:'+l.x+'%; top:'+l.y+'%;">'+l.t+'</span>'; });
  state.scooters.forEach(function(s){
    var kind = statusKind(s);
    var sel = state.selectedUnit===s.id ? ' selected' : '';
    html += '<div class="map-pin pin-'+kind+sel+'" style="left:'+s.x+'%; top:'+s.y+'%;" data-unit="'+s.id+'" data-map="'+containerId+'">'+scooterIconInPin+'</div>';
  });
  var sel = findScooter(state.selectedUnit);
  if(sel && containerId==='mapOverview'){
    html += '<div class="map-popup" style="left:'+sel.x+'%; top:'+(sel.y-13)+'%;">' +
      '<span class="pp-icon">'+ICON.scooterSmall+'</span>' +
      '<span><span class="pp-name">'+sel.id+'</span><br><span class="pp-sub">'+(sel.status==='Inuse'?('Active · '+(sel.speed||10)+' mph'):sel.status)+'</span></span>' +
      '<span class="pp-batt">'+sel.battery+'%</span>' +
    '</div>';
  }
  el.innerHTML = html;
  el.querySelectorAll('[data-unit]').forEach(function(pin){
    pin.addEventListener('click', function(e){
      e.stopPropagation();
      state.selectedUnit = pin.dataset.unit;
      renderMap('mapOverview','legendOverview');
      renderMap('mapTracking','legendTracking');
      renderNearby();
      renderActivity();
    });
  });
  if(legendId){
    var fc = fleetCounts();
    document.getElementById(legendId).innerHTML =
      '<span><i style="background:#8FE04B"></i>Active '+fc.inUse+'</span>' +
      '<span><i style="background:#1B2A20"></i>Available '+fc.available+'</span>' +
      '<span><i style="background:var(--red)"></i>Attention '+fc.attention+'</span>';
  }
}

function batteryColorText(b){ return b<25 ? ' low-batt' : ''; }

function renderNearby(){
  var wrap = document.getElementById('nearbyList');
  if(!wrap) return;
  wrap.innerHTML = state.scooters.map(function(s, i){
    var kind = statusKind(s);
    var bg = kind==='attention' ? 'var(--red)' : (kind==='active' ? '#8FE04B' : '#1B2A20');
    return '<div class="nearby-row'+(state.selectedUnit===s.id?' selected':'')+'" data-unit="'+s.id+'">' +
      '<span class="nearby-badge" style="background:'+bg+'">'+ICON.scooterSmall+'</span>' +
      '<div class="nearby-info"><div class="n-id">'+s.id+'</div><div class="n-loc">'+s.loc+'</div></div>' +
      '<div class="nearby-right"><div class="n-batt'+batteryColorText(s.battery)+'">'+s.battery+'%</div><div class="n-time">'+(i===0?'Now':(i+1)+'m')+'</div></div>' +
    '</div>';
  }).join("");
  wrap.querySelectorAll('[data-unit]').forEach(function(row){
    row.addEventListener('click', function(){
      state.selectedUnit = row.dataset.unit;
      renderMap('mapOverview','legendOverview');
      renderMap('mapTracking','legendTracking');
      renderNearby(); renderActivity();
    });
  });
}
function renderActivity(){
  var wrap = document.getElementById('activityList');
  if(!wrap) return;
  wrap.innerHTML = state.scooters.slice(0,4).map(function(s,i){
    var kind = statusKind(s);
    var bg = kind==='attention' ? 'var(--red)' : (kind==='active' ? '#8FE04B' : '#1B2A20');
    return '<div class="nearby-row" data-unit="'+s.id+'">' +
      '<span class="nearby-badge" style="background:'+bg+'">'+ICON.scooterSmall+'</span>' +
      '<div class="nearby-info"><div class="n-id">'+s.id+'</div><div class="n-loc">'+s.loc+'</div></div>' +
      '<div class="nearby-right"><div class="n-batt'+batteryColorText(s.battery)+'">'+s.battery+'%</div><div class="n-time">'+(i===0?'Now':(i+1)+'m')+'</div></div>' +
    '</div>';
  }).join("");
  wrap.querySelectorAll('[data-unit]').forEach(function(row){
    row.addEventListener('click', function(){ state.selectedUnit = row.dataset.unit; renderAll(); });
  });
}

/* ================= OVERVIEW ================= */
function renderOverview(){
  var fc = fleetCounts(), bc = bookingCounts();
  document.getElementById('catalogSub').textContent = MODELS.length+' fleet models · Rates from ₱'+Math.min.apply(null,MODELS.map(function(model){return model.rate;}))+' per day';
  document.getElementById('overviewStats').innerHTML = [
    ['green', ICON.fleet, fc.total, '+'+(state.scooters.length)+' this month', 'Total fleet'],
    ['blue', ICON.pulse, fc.inUse, Math.round(fc.inUse/fc.total*100)+'% utilization', 'In use now'],
    ['amber', ICON.bolt, fc.attention, fc.raw.Maintenance+' in maintenance', 'Need attention'],
    ['purple', ICON.cash, fmtMoney(state.baseline.todayRevenue + bc.todayValue), '+12.4% vs yesterday', 'Revenue today']
  ].map(statCardHtml).join("");

  renderMap('mapOverview','legendOverview');
  renderActivity();

  var attn = fc.attention;
  document.getElementById('attnBanner').innerHTML =
    '<span class="a-icon">'+ICON.bolt+'</span>' +
    '<div><div class="a-title">'+attn+' scooters need attention</div><div class="a-sub">Maintenance issues recorded across the fleet</div></div>' +
    '<button class="btn" id="reviewNowBtn">Review now</button>';
  document.getElementById('reviewNowBtn').addEventListener('click', function(){ goPage('fleet'); });

  document.getElementById('branchNameOv').textContent = state.branch.name;
  document.getElementById('branchDetailsOv').innerHTML =
    state.branch.address + '<br>' + state.branch.hours + '<br>' + state.branch.phone;
}
function statCardHtml(arr){
  var color = arr[0], icon = arr[1], num = arr[2], sub = arr[3], lbl = arr[4];
  return '<div class="stat-card"><span class="s-icon" style="background:var(--'+color+'-bg); color:var(--'+color+');">'+icon+'</span>' +
    '<div><div class="s-num">'+num+'</div><div class="s-lbl">'+lbl+'</div><div class="s-lbl" style="color:var(--'+color+');">'+sub+'</div></div></div>';
}

/* ================= FLEET ================= */
var FLEET_FILTERS = ["All","Available","Reserved","Inuse","Maintenance"];
var FLEET_FILTER_LABEL = {All:"All", Available:"Available", Reserved:"Reserved", Inuse:"In use", Maintenance:"Maintenance"};
function renderFleet(){
  var fc = fleetCounts();
  document.getElementById('fleetStats').innerHTML = [
    ['green', ICON.fleet, fc.total, '', 'Total scooters'],
    ['blue', ICON.pulse, fc.inUse, '', 'In use'],
    ['amber', ICON.bolt, fc.available, '', 'Available'],
    ['purple', ICON.chart, fc.attention, '', 'Need attention']
  ].map(statCardHtml).join("");

  document.getElementById('fleetFilters').innerHTML = FLEET_FILTERS.map(function(f){
    return '<button data-f="'+f+'" aria-pressed="'+(state.fleetFilter===f)+'">'+FLEET_FILTER_LABEL[f]+'</button>';
  }).join("");
  document.querySelectorAll('#fleetFilters [data-f]').forEach(function(b){
    b.addEventListener('click', function(){ state.fleetFilter = b.dataset.f; renderFleet(); });
  });

  var q = (document.getElementById('searchInput').value || '').toLowerCase();
  var rows = state.scooters.filter(function(s){
    var passFilter = state.fleetFilter==='All' || cls(s.status)===state.fleetFilter;
    var passSearch = !q || (s.id+s.model).toLowerCase().indexOf(q)>-1;
    return passFilter && passSearch;
  });
  document.getElementById('fleetTableBody').innerHTML = rows.map(function(s){
    var model = MODELS.filter(function(entry){return entry.name===s.model;})[0];
    return '<tr><td style="font-weight:700;">'+escapeHtml(s.id)+'</td><td><span class="fleet-model-visual"><span>'+ICON.scooterSmall+'</span><img src="'+modelPhoto(model,scooterColorName(s))+'" alt="" onload="this.previousElementSibling.hidden=true" onerror="this.hidden=true"></span><span class="fleet-model-name">'+escapeHtml(s.model)+'</span><span class="fleet-model-colors">₱'+rateFor(s.model)+' / 24 hrs</span></td><td>'+escapeHtml(scooterColorName(s))+'</td>' +
      '<td><span class="badge badge-'+cls(s.status)+'">'+(s.status==='Inuse'?'In use':s.status)+'</span></td>' +
      '<td>'+s.odo.toLocaleString()+' km</td>' +
      '<td><button class="row-view" data-unit="'+s.id+'">View</button></td></tr>';
  }).join("") || '<tr><td colspan="6" style="text-align:center; color:var(--text-dim); padding:24px;">No vehicles match this view.</td></tr>';
  document.querySelectorAll('#fleetTableBody [data-unit]').forEach(function(btn){
    btn.addEventListener('click', function(){ openFleetUnitDetail(btn.dataset.unit); });
  });
}
function openFleetUnitDetail(id){
  var scooter=findScooter(id);
  if(!scooter) return;
  var activeBooking=state.bookings.filter(function(booking){
    return booking.scooterId===id && (booking.status==='Confirmed' || booking.status==='Active');
  })[0];
  var statuses=['Available','Reserved','Inuse','Maintenance'];
  var statusOptions=statuses.map(function(status){
    var label=FLEET_FILTER_LABEL[status] || (status==='Inuse'?'In use':status);
    return '<option value="'+status+'" '+(scooter.status===status?'selected':'')+'>'+label+'</option>';
  }).join('');
  var model=MODELS.filter(function(entry){return entry.name===scooter.model;})[0];
  var colorOptions=modelColorOptions(scooter.model).replace(
    'value="'+escapeHtml(scooterColorName(scooter))+'"',
    'value="'+escapeHtml(scooterColorName(scooter))+'" selected'
  );
  openModal(modalHead('Edit scooter '+escapeHtml(scooter.id),escapeHtml(scooter.model)+' · ₱'+rateFor(scooter.model)+' / 24 hrs')+
    '<form id="fleetUnitForm"><div class="modal-body">'+
      '<div class="unit-edit-summary"><span>'+ICON.scooterSmall+'</span><div><strong>'+escapeHtml(scooter.model)+'</strong><small>'+escapeHtml(scooterColorName(scooter))+'</small></div></div>'+
      '<div class="field"><label for="unitColor">Unit color</label><select id="unitColor">'+colorOptions+'</select></div>'+
      '<div class="field"><label for="unitStatus">Fleet status</label><select id="unitStatus">'+statusOptions+'</select>'+(activeBooking?'<small class="fleet-edit-warning">Linked booking '+escapeHtml(activeBooking.code)+' is '+escapeHtml(activeBooking.status)+'. Complete it before making this unit available.</small>':'')+'</div>'+
      '<div class="field"><label for="unitOdometer">Odometer (km)</label><input id="unitOdometer" type="number" min="0" value="'+Number(scooter.odo||0)+'" required></div>'+
      '<div class="field"><label for="unitLocation">Current location</label><input id="unitLocation" value="'+escapeHtml(scooter.loc||'')+'" required></div>'+
      '<div class="field" style="margin-bottom:0"><label for="unitMaintenanceNote">Maintenance note</label><textarea id="unitMaintenanceNote" rows="3" placeholder="Describe the repair or inspection needed">'+escapeHtml(scooter.maintenanceNote||'')+'</textarea></div>'+
    '</div><div class="modal-actions"><button type="button" class="btn" id="unitEditCancel">Cancel</button><button type="submit" class="btn btn-dark">Save scooter</button></div></form>');
  wireClose();
  document.getElementById('unitEditCancel').addEventListener('click',closeModal);
  document.getElementById('fleetUnitForm').addEventListener('submit',function(event){
    event.preventDefault();
    var nextStatus=document.getElementById('unitStatus').value;
    var maintenanceNote=document.getElementById('unitMaintenanceNote').value.trim();
    var blockingBooking=state.bookings.filter(function(booking){
      return booking.scooterId===id && (booking.status==='Confirmed' || booking.status==='Active');
    })[0];
    if(blockingBooking && nextStatus==='Available'){
      toast('Complete booking '+blockingBooking.code+' before releasing this scooter.');return;
    }
    if(nextStatus==='Maintenance' && !maintenanceNote){
      toast('Add a maintenance note before saving this status.');return;
    }
    scooter.status=nextStatus;
    scooter.color=document.getElementById('unitColor').value;
    scooter.odo=Number(document.getElementById('unitOdometer').value);
    scooter.loc=document.getElementById('unitLocation').value.trim();
    scooter.maintenanceNote=maintenanceNote;
    closeModal();
    toast(nextStatus==='Available' && scooter.maintenanceNote ? scooter.id+' marked repaired and available.' : scooter.id+' updated.');
    renderAll();
  });
}

/* ================= BOOKINGS ================= */
var BOOK_FILTERS = ["All","Pending","Confirmed","Active","Completed","Declined"];
function renderBookings(){
  var bc = bookingCounts();
  document.getElementById('bookingsStats').innerHTML = [
    ['green', ICON.calendar, bc.today, '', 'Today'],
    ['blue', ICON.pulse, bc.active, '', 'Active now'],
    ['purple', ICON.cash, fmtK(bc.value), '', 'Booking value']
  ].map(statCardHtml).join("");

  document.getElementById('bookingsFilters').innerHTML = BOOK_FILTERS.map(function(f){
    return '<button data-f="'+f+'" aria-pressed="'+(state.bookingsFilter===f)+'">'+f+'</button>';
  }).join("");
  document.querySelectorAll('#bookingsFilters [data-f]').forEach(function(b){
    b.addEventListener('click', function(){ state.bookingsFilter = b.dataset.f; renderBookings(); });
  });

  var q = (document.getElementById('searchInput').value || '').toLowerCase();
  var rows = state.bookings.filter(function(b){
    var passFilter = state.bookingsFilter==='All' || b.status===state.bookingsFilter;
    var passSearch = !q || [b.customer,b.customerEmail,b.customerPhone,b.model,b.code,b.status,b.scooterId]
      .join(' ').toLowerCase().indexOf(q)>-1;
    return passFilter && passSearch;
  });
  document.getElementById('bookingsList').innerHTML = rows.map(function(b){
    var status=escapeHtml(b.status);
    return '<div class="booking-row" data-code="'+escapeHtml(b.code)+'">' +
      '<div class="b-time"><div class="tt">'+escapeHtml(b.time)+'</div><div class="td">'+escapeHtml(b.day)+'</div></div>' +
      '<div class="b-cust"><div class="name">'+escapeHtml(b.customer)+'</div><div class="veh">'+escapeHtml(b.model)+' · '+escapeHtml(b.code)+'</div></div>' +
      '<div class="booking-status-wrap"><span class="badge badge-'+status+' booking-status">'+status+'</span><small>'+(b.status==='Pending'?'Needs staff review':b.status==='Confirmed'?'Reserved and ready':b.status==='Active'?'Rental in progress':b.status==='Completed'?'Returned':'Request declined')+'</small><small class="booking-source">'+(b.source==='Online customer'?'Online request':'On-site staff')+'</small><small class="booking-payment">Payment · '+escapeHtml(bookingPaymentStatus(b))+'</small></div>' +
      '<div class="b-price">₱'+Number(b.price||0).toLocaleString()+'</div>' +
      '<span class="b-chev">'+ICON.chev+'</span>' +
    '</div>';
  }).join("") || '<div style="text-align:center; color:var(--text-dim); padding:24px;">No bookings match this view.</div>';
  document.querySelectorAll('.booking-row').forEach(function(row){
    row.addEventListener('click', function(){ openBookingDetail(row.dataset.code); });
  });
}

/* ================= CUSTOMERS ================= */
function renderCustomers(){
  var cc = customerCounts();
  document.getElementById('customerStats').innerHTML = [
    ['green', ICON.users, cc.total.toLocaleString(), '', 'Total customers'],
    ['blue', ICON.pulse, cc.returning, '', 'Repeat customers'],
    ['amber', ICON.calendar, cc.rentals.toLocaleString(), '', 'Recorded rentals'],
    ['purple', ICON.calendar, cc.withBookings, '', 'With current bookings']
  ].map(statCardHtml).join("");

  var q = (document.getElementById('searchInput').value || '').toLowerCase();
  var rows = state.customers.filter(function(c){
    return !q || [c.name,c.email,c.phone,c.status].join(' ').toLowerCase().indexOf(q)>-1;
  });
  document.getElementById('custGrid').innerHTML = rows.map(function(c,index){
    return '<button type="button" class="cust-card" data-customer-index="'+state.customers.indexOf(c)+'">' +
      '<span class="cust-avatar">'+escapeHtml(c.initials)+'</span>' +
      '<div class="cust-info"><div class="c-name">'+escapeHtml(c.name)+'</div><div class="c-status">'+escapeHtml(c.status)+'</div></div>' +
      '<div class="cust-stat"><div class="c-num">'+Number(c.rentals||0)+'</div><div class="c-lbl">rentals</div></div>' +
      '<div class="cust-stat"><div class="c-num">'+fmtMoney(c.ltv)+'</div><div class="c-lbl">lifetime value</div></div>' +
      '<span style="color:var(--text-dim);">'+ICON.chev+'</span>' +
    '</button>';
  }).join("") || '<div style="text-align:center; color:var(--text-dim); padding:24px; grid-column:1/-1;">No customers found.</div>';
  document.querySelectorAll('#custGrid [data-customer-index]').forEach(function(card){
    card.addEventListener('click',function(){
      var customer=state.customers[Number(card.dataset.customerIndex)];
      openCustomerDetail(customer);
    });
  });
}
function openCustomerDetail(customer){
  var customerBookings=state.bookings.filter(function(booking){
    var sameEmail=customer.email && booking.customerEmail &&
      booking.customerEmail.toLowerCase()===customer.email.toLowerCase();
    return sameEmail || booking.customer.toLowerCase()===customer.name.toLowerCase();
  });
  var completedBookings=customerBookings.filter(function(booking){return booking.status==='Completed';});
  var completedValue=completedBookings.reduce(function(total,booking){return total+Number(booking.price||0);},0);
  var bookingsHtml=customerBookings.map(function(booking){
    return '<div class="customer-history-row"><span>'+escapeHtml(booking.code)+'</span><strong>'+escapeHtml(booking.model)+'</strong><span>'+escapeHtml(booking.day)+' · '+escapeHtml(booking.time)+'</span><span class="badge badge-'+escapeHtml(booking.status)+'">'+escapeHtml(booking.status)+'</span></div>';
  }).join('') || '<p class="customer-history-empty">No bookings on record.</p>';
  openModal(modalHead('Customer details',escapeHtml(customer.name))+
    '<div class="modal-body"><div class="customer-detail-grid">'+
      '<div><span>Email</span><strong>'+escapeHtml(customer.email||'Not provided')+'</strong></div>'+
      '<div><span>Phone</span><strong>'+escapeHtml(customer.phone||'Not provided')+'</strong></div>'+
      '<div><span>Account status</span><strong>'+escapeHtml(customer.status||'Customer')+'</strong></div>'+
      '<div><span>Total rentals</span><strong>'+Math.max(Number(customer.rentals||0),completedBookings.length)+'</strong></div>'+
      '<div><span>Lifetime value</span><strong>'+fmtMoney(Math.max(Number(customer.ltv||0),completedValue))+'</strong></div>'+
    '</div><h4 class="customer-history-title">Booking history</h4><div class="customer-history">'+bookingsHtml+'</div></div>'+ 
    '<div class="modal-actions"><button type="button" class="btn btn-dark" id="customerDetailClose">Close</button></div>');
  wireClose();
  document.getElementById('customerDetailClose').addEventListener('click',closeModal);
}

/* ================= REPORTS ================= */
function renderReports(){
  var statusOrder=['Pending','Confirmed','Active','Completed','Declined'];
  var statusCounts=statusOrder.map(function(status){
    return {status:status,count:state.bookings.filter(function(booking){return booking.status===status;}).length};
  });
  var bookingValue=state.bookings.reduce(function(total,booking){
    return total+(booking.status==='Declined'?0:Number(booking.price||0));
  },0);
  var payments=paymentTotals();
  var fleetTotal=state.scooters.length;
  var inUse=state.scooters.filter(function(scooter){return scooter.status==='Inuse';}).length;
  var utilization=fleetTotal ? Math.round(inUse/fleetTotal*100) : 0;
  var maxCount=Math.max.apply(null,statusCounts.map(function(item){return item.count;}));
  document.getElementById('reportsStats').innerHTML = [
    ['green', ICON.calendar, state.bookings.length.toLocaleString(), '', 'Total bookings'],
    ['blue', ICON.cash, fmtK(bookingValue), '', 'Booking value'],
    ['amber', ICON.pulse, utilization+'%', '', 'Tracked fleet in use'],
    ['purple', ICON.chart, inUse+' / '+fleetTotal, '', 'Scooters in use'],
    ['green', ICON.cash, fmtK(payments.received), '', 'Payments received'],
    ['amber', ICON.clock, fmtK(payments.outstanding), '', 'Payments outstanding']
  ].map(statCardHtml).join("");

  document.getElementById('revChart').innerHTML = maxCount ? statusCounts.map(function(item){
    var h=Math.round(item.count/maxCount*100);
    return '<div class="bc-col" aria-label="'+escapeHtml(item.status)+': '+item.count+'">'+
      '<div class="bc-bar'+(item.status==='Active'?' hi':'')+'" style="height:'+h+'%;" title="'+escapeHtml(item.status)+': '+item.count+'"></div>'+
      '<div class="bc-lbl">'+escapeHtml(item.status)+'</div></div>';
  }).join("") : '<p class="customer-history-empty">No booking records to report yet.</p>';

  var modelTotals={};
  state.bookings.forEach(function(booking){
    modelTotals[booking.model]=(modelTotals[booking.model]||0)+1;
  });
  var topModel=Object.keys(modelTotals).sort(function(a,b){return modelTotals[b]-modelTotals[a];})[0];
  var pending=statusCounts.filter(function(item){return item.status==='Pending';})[0].count;
  var maintenance=state.scooters.filter(function(scooter){return scooter.status==='Maintenance';}).length;
  var insights=[
    [ICON.trend,topModel?'Most-booked model: '+escapeHtml(topModel):'No booking activity yet',topModel?modelTotals[topModel]+' booking record(s)':'New bookings will appear in reports'],
    [ICON.zap,pending+' booking request(s) need review',pending?'Review pending requests in Bookings':'No pending requests'],
    [ICON.bulb,maintenance+' scooter(s) in maintenance',maintenance?'Review service notes in Fleet':'No scooters currently marked for maintenance']
  ];
  document.getElementById('insightsList').innerHTML = insights.map(function(x){
    return '<div class="insight-row"><span class="insight-icon">'+x[0]+'</span><div><div class="insight-title">'+x[1]+'</div><div class="insight-sub">'+x[2]+'</div></div></div>';
  }).join("");
}

/* ================= SETTINGS ================= */
function renderSettings(){
  var items = [
    ['gps','GPS and geofence alerts','Notify when a scooter leaves its approved service area.'],
    ['lowBattery','Low battery alerts','Notify when battery level falls below 25%.'],
    ['newBooking','New booking alerts','Notify for every new online reservation.']
  ];
  document.getElementById('toggleList').innerHTML = items.map(function(it){
    var key=it[0];
    return '<div class="toggle-row"><div><div class="t-title">'+it[1]+'</div><div class="t-sub">'+it[2]+'</div></div>' +
      '<label class="switch"><input type="checkbox" data-set="'+key+'" '+(state.settings[key]?'checked':'')+'><span class="track"></span></label></div>';
  }).join("");
  document.querySelectorAll('#toggleList [data-set]').forEach(function(inp){
    inp.addEventListener('change', function(){ state.settings[inp.dataset.set] = inp.checked; });
  });
  document.getElementById('branchName').textContent = state.branch.name;
  document.getElementById('branchAddr').innerHTML = state.branch.address + '<br>' + state.branch.phone;
}

/* ================= MAIN ADMIN ================= */
function adminBranches(){
  return [{id:"main",name:state.branch.name,address:state.branch.address,phone:state.branch.phone,active:true}].concat(state.adminBranches);
}
function renderAdmin(){
  var branches=adminBranches();
  var activeStaff=state.adminStaff.filter(function(staff){return staff.active;}).length;
  document.getElementById('adminStats').innerHTML=[
    ['blue',ICON.users,branches.length,'Locations in dashboard','Rental branches'],
    ['green',ICON.users,activeStaff,'Can access this demo view','Active staff'],
    ['amber',ICON.users,state.adminStaff.length-activeStaff,'Records marked inactive','Inactive staff']
  ].map(statCardHtml).join('');
  document.getElementById('adminBranchesTable').innerHTML=branches.map(function(branch){
    return '<tr><td><strong>'+escapeHtml(branch.name)+'</strong>'+(branch.id==='main'?'<div class="admin-main-label">Primary branch</div>':'')+'</td>'+
      '<td>'+escapeHtml(branch.address)+'</td><td>'+escapeHtml(branch.phone)+'</td>'+
      '<td><span class="badge '+(branch.active?'badge-Active':'badge-Completed')+'">'+(branch.active?'Active':'Inactive')+'</span></td>'+
      '<td>'+(branch.id==='main'?'<span class="admin-main-label">Primary</span>':'<button type="button" class="row-view" data-admin-branch-toggle="'+escapeHtml(branch.id)+'">'+(branch.active?'Deactivate':'Activate')+'</button>')+'</td></tr>';
  }).join('');
  document.getElementById('adminStaffTable').innerHTML=state.adminStaff.map(function(staff){
    var branch=branches.filter(function(item){return item.id===staff.branchId;})[0];
    return '<tr><td><strong>'+escapeHtml(staff.name)+'</strong><div class="admin-main-label">'+escapeHtml(staff.email)+'</div></td>'+
      '<td>'+escapeHtml(staff.role)+'</td><td>'+escapeHtml(branch?branch.name:'Unassigned')+'</td>'+
      '<td><span class="badge '+(staff.active?'badge-Active':'badge-Completed')+'">'+(staff.active?'Active':'Inactive')+'</span></td>'+
      '<td>'+(staff.role==='Owner'?'<span class="admin-main-label">Primary admin</span>':'<button type="button" class="row-view" data-admin-staff-toggle="'+escapeHtml(staff.id)+'">'+(staff.active?'Deactivate':'Activate')+'</button>')+'</td></tr>';
  }).join('');
}
document.getElementById('addBranchBtn').addEventListener('click',function(){
  openModal(
    modalHead('Add a branch','Add a rental location to this demo dashboard.')+
    '<form id="adminBranchForm"><div class="modal-body">'+
      '<div class="field"><label for="abName">Branch name</label><input id="abName" required maxlength="80" placeholder="e.g. Jones Scooter — Mactan"></div>'+
      '<div class="field"><label for="abAddress">Address</label><input id="abAddress" required maxlength="120" placeholder="Street, city, postal code"></div>'+
      '<div class="field" style="margin-bottom:0;"><label for="abPhone">Contact number</label><input id="abPhone" required maxlength="40" type="tel" placeholder="09XX XXX XXXX"></div>'+
    '</div><div class="modal-actions"><button type="button" class="btn" id="abCancel">Cancel</button><button type="submit" class="btn btn-dark">Add branch</button></div></form>'
  );
  wireClose();
  document.getElementById('abCancel').addEventListener('click',closeModal);
  document.getElementById('adminBranchForm').addEventListener('submit',function(event){
    event.preventDefault();
    var name=document.getElementById('abName').value.trim();
    var address=document.getElementById('abAddress').value.trim();
    var phone=document.getElementById('abPhone').value.trim();
    if(!name||!address||!phone){toast('Complete all branch details before saving.');return;}
    var id='branch-'+Date.now();
    state.adminBranches.push({id:id,name:name,address:address,phone:phone,active:true});
    closeModal();toast('Branch added to the demo.');renderAll();
  });
});
document.getElementById('addStaffBtn').addEventListener('click',function(){
  var options=adminBranches().filter(function(branch){return branch.active;}).map(function(branch){
    return '<option value="'+escapeHtml(branch.id)+'">'+escapeHtml(branch.name)+'</option>';
  }).join('');
  openModal(
    modalHead('Add a staff member','Create a staff record for this demo dashboard.')+
    '<form id="adminStaffForm"><div class="modal-body">'+
      '<div class="field"><label for="asName">Full name</label><input id="asName" required maxlength="80" placeholder="Team member name"></div>'+
      '<div class="field"><label for="asEmail">Email address</label><input id="asEmail" type="email" required maxlength="120" placeholder="name@example.com"></div>'+
      '<div class="field-row"><div class="field"><label for="asRole">Role</label><select id="asRole"><option>Branch manager</option><option>Fleet staff</option><option>Booking staff</option></select></div>'+
      '<div class="field"><label for="asBranch">Branch</label><select id="asBranch">'+options+'</select></div></div>'+
    '</div><div class="modal-actions"><button type="button" class="btn" id="asCancel">Cancel</button><button type="submit" class="btn btn-dark">Add staff</button></div></form>'
  );
  wireClose();
  document.getElementById('asCancel').addEventListener('click',closeModal);
  document.getElementById('adminStaffForm').addEventListener('submit',function(event){
    event.preventDefault();
    var name=document.getElementById('asName').value.trim();
    var email=document.getElementById('asEmail').value.trim().toLowerCase();
    var duplicate=state.adminStaff.some(function(staff){return staff.email.toLowerCase()===email;});
    if(!name||!email){toast('Enter the staff member’s name and email address.');return;}
    if(duplicate){toast('A staff record with that email already exists.');return;}
    state.adminStaff.push({id:'staff-'+Date.now(),name:name,email:email,role:document.getElementById('asRole').value,branchId:document.getElementById('asBranch').value,active:true});
    closeModal();toast('Staff record added. No account invitation was sent.');renderAll();
  });
});
document.getElementById('adminStaffTable').addEventListener('click',function(event){
  var button=event.target.closest('[data-admin-staff-toggle]');
  if(!button)return;
  var staff=state.adminStaff.filter(function(item){return item.id===button.dataset.adminStaffToggle;})[0];
  if(!staff)return;
  staff.active=!staff.active;renderAll();
  toast(staff.name+' marked '+(staff.active?'active.':'inactive.'));
});
document.getElementById('adminBranchesTable').addEventListener('click',function(event){
  var button=event.target.closest('[data-admin-branch-toggle]');
  if(!button)return;
  var branch=state.adminBranches.filter(function(item){return item.id===button.dataset.adminBranchToggle;})[0];
  if(!branch)return;
  branch.active=!branch.active;renderAll();
  toast(branch.name+' marked '+(branch.active?'active.':'inactive.'));
});

/* ================= NOTIFICATIONS POPOVER ================= */
function renderNotifPop(){
  var pop = document.getElementById('notifPop');
  pop.innerHTML = '<div class="notif-head">Notifications</div>' +
    state.notifications.map(function(n){
      return '<div class="notif-item"><span class="notif-dot" style="background:'+n.color+'"></span><div><div class="notif-title">'+n.title+'</div><div class="notif-sub">'+n.sub+'</div></div></div>';
    }).join("") +
    '<div class="notif-foot" id="markAllRead">Mark all as read</div>';
  document.getElementById('markAllRead').addEventListener('click', function(){
    state.notifRead = true;
    document.getElementById('bellPing').style.display = 'none';
    pop.hidden = true;
  });
}
var bellBtn = document.getElementById('bellBtn');
bellBtn.addEventListener('click', function(e){
  e.stopPropagation();
  var pop = document.getElementById('notifPop');
  if(pop.hidden){ renderNotifPop(); pop.hidden = false; } else { pop.hidden = true; }
});
document.addEventListener('click', function(e){
  var pop = document.getElementById('notifPop');
  if(!pop.hidden && !pop.contains(e.target) && e.target!==bellBtn){ pop.hidden = true; }
});

/* ================= SEARCH ================= */
var searchBtn = document.getElementById('searchBtn');
var searchInline = document.getElementById('searchInline');
var searchInput = document.getElementById('searchInput');
searchBtn.addEventListener('click', function(){
  searchInline.classList.toggle('open');
  if(searchInline.classList.contains('open')) searchInput.focus();
});
searchInput.addEventListener('input', function(){ renderAll(); });

/* ================= MODALS ================= */
var overlay = document.getElementById('modalOverlay');
var modalRoot = document.getElementById('modalRoot');
function closeModal(){ overlay.hidden = true; modalRoot.innerHTML = ""; }
overlay.addEventListener('click', function(e){ if(e.target===overlay) closeModal(); });

function openModal(html){ modalRoot.innerHTML = html; overlay.hidden = false; }
function modalHead(title, sub){
  return '<div class="modal-head"><div><h3>'+title+'</h3><p>'+sub+'</p></div><button class="modal-x" id="mClose">'+
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>';
}
function wireClose(){ document.getElementById('mClose').addEventListener('click', closeModal); }

/* Add customer */
document.getElementById('addCustomerBtn').addEventListener('click', function(){
  openModal(
    modalHead('Add a customer','Create a customer profile for faster future bookings.') +
    '<form id="custForm">' +
      '<div class="modal-body">' +
        '<div class="field"><label>Full name</label><input id="cfName" required placeholder="Customer name"></div>' +
        '<div class="field"><label>Email address</label><input id="cfEmail" type="email" placeholder="Optional"></div>' +
        '<div class="field" style="margin-bottom:0;"><label>Phone number</label><input id="cfPhone" placeholder="09XX XXX XXXX"></div>' +
      '</div>' +
      '<div class="modal-actions"><button type="button" class="btn" id="cCancel">Cancel</button><button type="submit" class="btn btn-dark">Add customer</button></div>' +
    '</form>'
  );
  wireClose();
  document.getElementById('cCancel').addEventListener('click', closeModal);
  document.getElementById('custForm').addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('cfName').value.trim();
    var email = document.getElementById('cfEmail').value.trim().toLowerCase();
    var phone = document.getElementById('cfPhone').value.trim();
    var initials = name.split(/\s+/).map(function(w){return w[0];}).join("").slice(0,2).toUpperCase() || "NA";
    state.customers.unshift({name:name, initials:initials, status:"Just added", rentals:0, ltv:0,email:email,phone:phone||'Not provided'});
    closeModal(); toast(name + " added to customers."); renderAll();
  });
});

/* New booking / Create a booking */
function openBookingModal(){
  var availableScooters=state.scooters.filter(function(scooter){
    return scooter.status==='Available' && (scooter.battery==null || Number(scooter.battery)>=25);
  });
  var options = availableScooters.map(function(s){ return '<option value="'+escapeHtml(s.id)+'" data-rate="'+rateFor(s.model)+'">'+escapeHtml(s.id)+' · '+escapeHtml(s.model)+' · '+escapeHtml(scooterColorName(s))+'</option>'; }).join("");
  openModal(
    modalHead('Create a booking','Reserve a scooter and confirm the rental schedule.') +
    '<form id="bookForm">' +
      '<div class="modal-body">' +
        '<div class="field"><label>Customer name</label><input id="bfName" required placeholder="Enter full name"></div>' +
        '<div class="field-row"><div class="field"><label>Email address</label><input id="bfEmail" type="email" placeholder="Optional"></div><div class="field"><label>Phone number</label><input id="bfPhone" type="tel" placeholder="09XX XXX XXXX"></div></div>' +
        '<div class="field-row">' +
          '<div class="field"><label>Available scooter</label><select id="bfScooter" '+(!availableScooters.length?'disabled':'')+'>'+options+'</select></div>' +
          '<div class="field"><label>Daily rate</label><select id="bfRate"></select></div>' +
        '</div>' +
        '<div class="field" style="margin-bottom:0;"><label>Pickup schedule</label>' +
          '<select id="bfSchedule">' +
            '<option>Today · 3:00 PM</option><option>Today · 5:00 PM</option><option>Today · 7:00 PM</option>' +
            '<option>Tomorrow · 8:00 AM</option><option>Tomorrow · 10:00 AM</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div class="modal-actions"><button type="button" class="btn" id="bCancel">Cancel</button><button type="submit" class="btn btn-dark">Confirm booking</button></div>' +
    '</form>'
  );
  wireClose();
  var scooterSel = document.getElementById('bfScooter');
  var rateSel = document.getElementById('bfRate');
  function syncRate(){
    var opt = scooterSel.options[scooterSel.selectedIndex];
    var r = opt ? parseInt(opt.dataset.rate,10) : 500;
    rateSel.innerHTML = '<option value="'+r+'">₱'+r+'</option>';
  }
  scooterSel.addEventListener('change', syncRate); syncRate();
  document.getElementById('bCancel').addEventListener('click', closeModal);
  document.getElementById('bookForm').addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('bfName').value.trim();
    var email = document.getElementById('bfEmail').value.trim().toLowerCase();
    var phone = document.getElementById('bfPhone').value.trim();
    var sId = scooterSel.value;
    var s = findScooter(sId);
    if(!s || s.status!=='Available' || (s.battery!=null && Number(s.battery)<25)){toast('No available scooter is selected.');return;}
    var price = parseInt(rateSel.value,10);
    var schedule = document.getElementById('bfSchedule').value;
    var parts = schedule.split(' · ');
    var code = uid('BK');
    s.status='Reserved';
    state.bookings.unshift({code:code, customer:name, customerEmail:email, customerPhone:phone||'Not provided', scooterId:sId, model:s.model, color:scooterColorName(s), time:parts[1], day:parts[0], status:'Confirmed', price:price, source:'On-site staff'});
    ensureAdminCustomer({name:name,email:email,phone:phone});
    closeModal(); toast('Booking '+code+' confirmed for '+name+'.'); renderAll();
  });
}
document.getElementById('newBookingBtn').addEventListener('click', openBookingModal);

function openBookingDetail(code){
  var b = state.bookings.filter(function(x){return x.code===code;})[0];
  if(!b) return;
  var customer=state.customers.filter(function(entry){
    return b.customerEmail ? (entry.email||'').toLowerCase()===b.customerEmail.toLowerCase() : entry.name===b.customer;
  })[0];
  var actionButton=b.status==='Pending' ? '<button class="btn btn-lime" id="confirmBooking">Confirm &amp; reserve unit</button><button class="btn btn-danger" id="declineBooking">Decline request</button>' : b.status==='Confirmed' ? '<button class="btn btn-lime" id="markActive">Mark picked up · Active</button>' : b.status==='Active' ? '<button class="btn btn-lime" id="markDone">Mark returned · Complete</button>' : '';
  if(b.status!=='Declined' && bookingPaymentStatus(b)!=='Paid'){
    actionButton+='<button class="btn" id="recordPaymentReceived">Record payment received</button>';
  }
  openModal(
    modalHead('Booking '+escapeHtml(b.code), escapeHtml(b.customer)+' · '+escapeHtml(b.model)) +
    '<div class="modal-body">' +
      '<div class="booking-detail-grid"><div><span>Schedule</span><strong>'+escapeHtml(b.day)+' · '+escapeHtml(b.time)+'</strong></div><div><span>Status</span><strong><span class="badge badge-'+escapeHtml(b.status)+'">'+escapeHtml(b.status)+'</span></strong></div><div><span>Source</span><strong>'+escapeHtml(b.source==='Online customer'?'Online customer booking':'On-site staff booking')+'</strong></div><div><span>Scooter</span><strong>'+escapeHtml(b.scooterId||'Assign when confirmed')+'</strong></div><div><span>Delivery</span><strong>'+escapeHtml(b.deliveryLabel||'Self pick-up')+'</strong></div>'+(b.deliveryDistanceKm?'<div><span>Delivery distance</span><strong>'+Number(b.deliveryDistanceKm).toLocaleString()+' km</strong></div><div><span>Delivery fee</span><strong>₱'+Number(b.deliveryFee||0).toLocaleString()+'</strong></div>':'')+'<div><span>Payment method</span><strong>'+escapeHtml(b.paymentMethod||'Cash on pick-up')+'</strong></div><div><span>Payment status</span><strong>'+escapeHtml(bookingPaymentStatus(b))+'</strong></div><div><span>Amount</span><strong>₱'+Number(b.price||0).toLocaleString()+'</strong></div><div><span>Customer email</span><strong>'+escapeHtml(b.customerEmail||'Not provided')+'</strong></div><div><span>Customer phone</span><strong>'+escapeHtml(b.customerPhone||'Not provided')+'</strong></div></div>'+
      (b.deliveryAddress?'<p class="booking-detail-address"><strong>Delivery address</strong><br>'+escapeHtml(b.deliveryAddress)+'</p>':'')+
      '<button type="button" class="customer-detail-link" id="bookingCustomerDetail">View customer details</button>'+
    '</div>' +
    '<div class="modal-actions">' +
      actionButton+
      '<button class="btn btn-dark" id="mClose2">Close</button>' +
    '</div>'
  );
  wireClose();
  document.getElementById('mClose2').addEventListener('click', closeModal);
  document.getElementById('bookingCustomerDetail').addEventListener('click',function(){
    if(customer) openCustomerDetail(customer);
    else openCustomerDetail({name:b.customer,email:b.customerEmail,phone:b.customerPhone,status:'Booking customer',rentals:1,ltv:b.price});
  });
  var recordPayment=document.getElementById('recordPaymentReceived');
  if(recordPayment) recordPayment.addEventListener('click',function(){
    b.paymentStatus='Paid';
    b.paymentReceivedAt=new Date().toISOString();
    syncCustomerBookingStatus(b);
    closeModal();toast('Payment recorded for booking '+b.code+'.');renderAll();
  });
  var confirm = document.getElementById('confirmBooking');
  if(confirm) confirm.addEventListener('click',function(){
    if(!reserveBookingUnit(b)){toast('No available unit for '+b.model+'.');return;}
    b.status='Confirmed'; syncCustomerBookingStatus(b);
    closeModal();toast('Booking '+b.code+' confirmed. '+b.scooterId+' is reserved and ready.');renderAll();
  });
  var decline = document.getElementById('declineBooking');
  if(decline) decline.addEventListener('click',function(){
    b.status='Declined'; syncCustomerBookingStatus(b);
    closeModal();toast('Booking '+b.code+' declined.');renderAll();
  });
  var ma = document.getElementById('markActive');
  if(ma) ma.addEventListener('click', function(){
    b.status='Active';
    var s = findScooter(b.scooterId); if(s) s.status='Inuse';
    syncCustomerBookingStatus(b);
    closeModal(); toast('Booking '+b.code+' is now active.'); renderAll();
  });
  var md = document.getElementById('markDone');
  if(md) md.addEventListener('click', function(){
    b.status='Completed';
    var s = findScooter(b.scooterId); if(s) s.status='Available';
    syncCustomerBookingStatus(b);
    closeModal(); toast('Booking '+b.code+' marked completed.'); renderAll();
  });
}

/* Register scooter */
function openRegisterModal(){
  var options = MODELS.map(function(m){ return '<option>'+m.name+'</option>'; }).join("");
  openModal(
    modalHead('Register a scooter','Add a vehicle to your GPS-enabled rental fleet.') +
    '<form id="regForm">' +
      '<div class="modal-body">' +
        '<div class="field"><label>Vehicle ID</label><input id="rfId" placeholder="Auto-generated if empty"></div>' +
        '<div class="field"><label for="rfModel">Model</label><select id="rfModel">'+options+'</select></div>' +
        '<div class="field" style="margin-bottom:0;"><label for="rfColor">Unit color</label><select id="rfColor">'+modelColorOptions(MODELS[0].name)+'</select></div>' +
      '</div>' +
      '<div class="modal-actions"><button type="button" class="btn" id="rCancel">Cancel</button><button type="submit" class="btn btn-dark">Register scooter</button></div>' +
    '</form>'
  );
  wireClose();
  document.getElementById('rfModel').addEventListener('change',syncRegisterColors);
  document.getElementById('rCancel').addEventListener('click', closeModal);
  document.getElementById('regForm').addEventListener('submit', function(e){
    e.preventDefault();
    var id = document.getElementById('rfId').value.trim() || uid('JS');
    var model = document.getElementById('rfModel').value;
    var color = document.getElementById('rfColor').value;
    if(state.scooters.some(function(scooter){return scooter.id.toLowerCase()===id.toLowerCase();})){
      toast('A scooter with ID '+id+' is already registered.');return;
    }
    state.scooters.unshift({id:id, model:model, color:color, status:'Available', battery:100, odo:0, x:20+Math.random()*60, y:20+Math.random()*60, loc:"Casanta Soong"});
    closeModal(); toast(id + ' registered to the fleet.'); renderAll();
  });
}
document.getElementById('registerScooterBtn').addEventListener('click', openRegisterModal);
var quickAddScooterButton=document.getElementById('quickAddScooterBtn');
if(quickAddScooterButton) quickAddScooterButton.addEventListener('click', openRegisterModal);

/* Locate scooter */
document.getElementById('locateBtn').addEventListener('click', function(){
  var options = state.scooters.map(function(s){ return '<option value="'+s.id+'">'+s.id+' · '+s.model+'</option>'; }).join("");
  openModal(
    modalHead('Show scooter on map','Choose a scooter to highlight its sample position on the location preview.') +
    '<form id="locForm">' +
      '<div class="modal-body"><div class="field" style="margin-bottom:0;"><label>Scooter</label><select id="lfScooter">'+options+'</select></div></div>' +
      '<div class="modal-actions"><button type="button" class="btn" id="lCancel">Cancel</button><button type="submit" class="btn btn-dark">Locate on map</button></div>' +
    '</form>'
  );
  wireClose();
  document.getElementById('lCancel').addEventListener('click', closeModal);
  document.getElementById('locForm').addEventListener('submit', function(e){
    e.preventDefault();
    state.selectedUnit = document.getElementById('lfScooter').value;
    closeModal(); renderAll();
  });
});

/* Edit branch */
document.getElementById('editBranchBtn').addEventListener('click', function(){
  openModal(
    modalHead('Edit branch profile','Update your branch details shown to customers.') +
    '<form id="branchForm">' +
      '<div class="modal-body">' +
        '<div class="field"><label>Branch name</label><input id="bfBranchName" value="'+state.branch.name+'"></div>' +
        '<div class="field"><label>Address</label><input id="bfBranchAddr" value="'+state.branch.address+'"></div>' +
        '<div class="field" style="margin-bottom:0;"><label>Phone</label><input id="bfBranchPhone" value="'+state.branch.phone+'"></div>' +
      '</div>' +
      '<div class="modal-actions"><button type="button" class="btn" id="brCancel">Cancel</button><button type="submit" class="btn btn-dark">Save changes</button></div>' +
    '</form>'
  );
  wireClose();
  document.getElementById('brCancel').addEventListener('click', closeModal);
  document.getElementById('branchForm').addEventListener('submit', function(e){
    e.preventDefault();
    state.branch.name = document.getElementById('bfBranchName').value.trim();
    state.branch.address = document.getElementById('bfBranchAddr').value.trim();
    state.branch.phone = document.getElementById('bfBranchPhone').value.trim();
    closeModal(); toast('Branch profile updated.'); renderAll();
  });
});

/* misc buttons */
document.getElementById('saveSettingsBtn').addEventListener('click', function(){ toast('Settings saved.'); });
document.getElementById('exportFleetBtn').addEventListener('click', function(){ toast('Fleet list exported.'); });
document.getElementById('exportReportBtn').addEventListener('click', function(){
  var rows=[
    ['Section','Metric','Value'],
    ['Bookings','Total bookings',state.bookings.length],
    ['Bookings','Booking value',state.bookings.reduce(function(total,booking){
      return total+(booking.status==='Declined'?0:Number(booking.price||0));
    },0)],
    ['Fleet','Tracked scooters',state.scooters.length]
  ];
  ['Pending','Confirmed','Active','Completed','Declined'].forEach(function(status){
    rows.push(['Bookings',status,state.bookings.filter(function(booking){return booking.status===status;}).length]);
  });
  ['Available','Reserved','Inuse','Maintenance'].forEach(function(status){
    rows.push(['Fleet',status,state.scooters.filter(function(scooter){return scooter.status===status;}).length]);
  });
  var csv=rows.map(function(row){
    return row.map(function(value){return '"'+String(value==null?'':value).replace(/"/g,'""')+'"';}).join(',');
  }).join('\r\n');
  var url=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'}));
  var link=document.createElement('a');
  link.href=url;
  link.download='jones-scooter-report.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(function(){URL.revokeObjectURL(url);},0);
  toast('Report downloaded.');
});
document.getElementById('syncCalBtn').addEventListener('click', function(){ toast('Calendar sync is not connected yet.'); });
document.getElementById('viewCatalogBtn').addEventListener('click', function(){ goPage('fleet'); });
document.getElementById('copyBranchBtn').addEventListener('click', function(){
  var text = state.branch.name+"\\n"+state.branch.address+"\\n"+state.branch.phone;
  if(navigator.clipboard){ navigator.clipboard.writeText(text).then(function(){ toast('Branch details copied.'); }).catch(function(){ toast('Could not copy details.'); }); }
});

/* ================= RENDER ALL ================= */
function renderAll(){
  document.getElementById('navBookingsCount').textContent = state.bookings.filter(function(b){return b.status!=='Completed';}).length;
  if(state.page==='overview') renderOverview();
  if(state.page==='tracking'){ renderMap('mapTracking','legendTracking'); renderNearby(); }
  if(state.page==='fleet') renderFleet();
  if(state.page==='bookings') renderBookings();
  if(state.page==='customers') renderCustomers();
  if(state.page==='reports') renderReports();
  if(state.page==='admin') renderAdmin();
  if(state.page==='settings') renderSettings();
}
renderAll();

/* ================= SUPPORT CHAT ================= */
var CHAT_STORAGE_KEY='jones-scooter-demo-chat';
var chatThreads={};
var chatSelectedEmail='';
var chatStorageAvailable=true;
function loadChatThreads(){
  try{
    var stored=localStorage.getItem(CHAT_STORAGE_KEY);
    var parsed=stored?JSON.parse(stored):{};
    chatThreads=parsed && parsed.threads && typeof parsed.threads==='object' ? parsed.threads : {};
    Object.keys(chatThreads).forEach(function(email){
      var thread=chatThreads[email];
      if(!thread || !Array.isArray(thread.messages)){
        delete chatThreads[email];
        return;
      }
      thread.messages=thread.messages.filter(function(message){
        return message && (message.sender==='staff'||message.sender==='customer') &&
          typeof message.text==='string' && typeof message.createdAt==='string';
      });
    });
  }catch(error){
    chatThreads={};
    chatStorageAvailable=false;
  }
}
function saveChatThreads(){
  if(!chatStorageAvailable) return;
  try{
    localStorage.setItem(CHAT_STORAGE_KEY,JSON.stringify({threads:chatThreads}));
  }catch(error){
    chatStorageAvailable=false;
    document.getElementById('chatDemoNote').textContent='Browser storage is unavailable. Messages will remain only until this page is closed.';
  }
}
function chatCurrentRole(){
  return document.body.classList.contains('customer-visible')?'customer':'staff';
}
function chatCurrentEmail(){
  return (customerState.email||'').trim().toLowerCase();
}
function chatThreadEmails(){
  return Object.keys(chatThreads).filter(function(email){
    return chatThreads[email] && chatThreads[email].messages && chatThreads[email].messages.length;
  }).sort(function(a,b){
    var aMessages=chatThreads[a].messages, bMessages=chatThreads[b].messages;
    return new Date(bMessages[bMessages.length-1].createdAt)-new Date(aMessages[aMessages.length-1].createdAt);
  });
}
function renderChat(){
  var role=chatCurrentRole(), isCustomer=role==='customer';
  var title=document.getElementById('chatTitle');
  var subtitle=document.getElementById('chatSubtitle');
  var launcherLabel=document.getElementById('chatLauncherLabel');
  var conversationWrap=document.getElementById('chatConversationWrap');
  var conversationSelect=document.getElementById('chatConversationSelect');
  var messagesElement=document.getElementById('chatMessages');
  var input=document.getElementById('chatInput');
  var sendButton=document.getElementById('chatSendBtn');
  var note=document.getElementById('chatDemoNote');
  var email=isCustomer?chatCurrentEmail():chatSelectedEmail;
  var thread=email?chatThreads[email]:null;
  if(!isCustomer){
    var emails=chatThreadEmails();
    if(emails.indexOf(chatSelectedEmail)<0) chatSelectedEmail=emails[0]||'';
    email=chatSelectedEmail;
    thread=email?chatThreads[email]:null;
    conversationWrap.hidden=false;
    conversationSelect.innerHTML=emails.map(function(customerEmail){
      var entry=chatThreads[customerEmail];
      return '<option value="'+escapeHtml(customerEmail)+'" '+(customerEmail===email?'selected':'')+'>'+escapeHtml(entry.name||customerEmail)+' · '+escapeHtml(customerEmail)+'</option>';
    }).join('');
    conversationSelect.disabled=!emails.length;
  }else{
    conversationWrap.hidden=true;
  }
  title.textContent=isCustomer?'Jones Scooter support':'Customer messages';
  subtitle.textContent=isCustomer?'Chat with the Jones Scooter team':'Staff inbox · '+(thread?(thread.name||email):'waiting for a customer');
  launcherLabel.textContent=isCustomer?'Chat with staff':'Customer chats';
  input.disabled=!isCustomer&&!thread;
  sendButton.disabled=input.disabled;
  input.placeholder=input.disabled?'No customer conversations yet':'Write a message...';
  note.textContent=chatStorageAvailable
    ? 'Demo chat · messages stay in this browser and are not sent to other devices.'
    : 'Browser storage is unavailable. Messages remain only until this page is closed.';
  if(!thread || !thread.messages.length){
    messagesElement.innerHTML='<p class="chat-empty">'+(isCustomer?'No messages yet. Send a message and the team can reply here.':'Customer conversations will appear here when a customer sends a message.')+'</p>';
  }else{
    messagesElement.innerHTML=thread.messages.map(function(message){
      var mine=message.sender===role;
      var author=message.sender==='staff'?'Jones Scooter staff':(thread.name||'Customer');
      var timestamp=new Date(message.createdAt);
      var time=Number.isNaN(timestamp.getTime())?'':timestamp.toLocaleString();
      return '<article class="chat-message'+(mine?' mine':'')+'"><span class="chat-message-author">'+escapeHtml(author)+'</span><div class="chat-message-text">'+escapeHtml(message.text)+'</div><time class="chat-message-time">'+escapeHtml(time)+'</time></article>';
    }).join('');
    messagesElement.scrollTop=messagesElement.scrollHeight;
  }
}
function sendChatMessage(event){
  event.preventDefault();
  var role=chatCurrentRole();
  var email=role==='customer'?chatCurrentEmail():chatSelectedEmail;
  var input=document.getElementById('chatInput');
  var text=input.value.trim();
  if(!email||!text) return;
  if(!chatThreads[email]) chatThreads[email]={email:email,name:role==='customer'?customerState.name:email,messages:[]};
  if(role==='customer') chatThreads[email].name=customerState.name||email;
  chatThreads[email].messages.push({sender:role,text:text,createdAt:new Date().toISOString()});
  if(role==='staff') chatSelectedEmail=email;
  saveChatThreads();
  input.value='';
  renderChat();
  input.focus();
}
loadChatThreads();
renderChat();
document.getElementById('chatLauncher').addEventListener('click',function(){
  var panel=document.getElementById('chatPanel');
  panel.hidden=!panel.hidden;
  document.getElementById('chatLauncher').setAttribute('aria-expanded',String(!panel.hidden));
  if(!panel.hidden){
    renderChat();
    document.getElementById('chatInput').focus();
  }
});
document.getElementById('chatCloseBtn').addEventListener('click',function(){
  document.getElementById('chatPanel').hidden=true;
  document.getElementById('chatLauncher').setAttribute('aria-expanded','false');
});
document.getElementById('chatConversationSelect').addEventListener('change',function(event){
  chatSelectedEmail=event.target.value;
  renderChat();
});
document.getElementById('chatForm').addEventListener('submit',sendChatMessage);
window.addEventListener('storage',function(event){
  if(event.key===CHAT_STORAGE_KEY){
    loadChatThreads();
    renderChat();
  }
});

/* ================= SIMULATION TICK ================= */
setInterval(function(){
  state.scooters.forEach(function(s){
    if(s.status==='Inuse'){
      s.x = Math.min(92, Math.max(8, s.x + (Math.random()*10-5)));
      s.y = Math.min(92, Math.max(8, s.y + (Math.random()*10-5)));
      if(Math.random()<0.3) s.battery = Math.max(5, s.battery-1);
    }
  });
  renderAll();
}, 6000);

})();
