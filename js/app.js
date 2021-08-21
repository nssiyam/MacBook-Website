// memory cost function 
function updateMemoryCost(isMemory) {
    let memoryCost = document.getElementById('memory-cost').innerText;
    let newMemoryCost = document.getElementById('memory-cost');

    if (isMemory == '8gb') {
        newMemoryCost.innerText = 0;
    }
    else if (isMemory == '16gb') {
        newMemoryCost.innerText = 180;
    }
    
    return newMemoryCost;
}

// storage cost function 
function updateStorageCost(isStorage) {
    let storageCost = document.getElementById('storage-cost').innerText;
    let newStorageCost = document.getElementById('storage-cost');

    if (isStorage == '256gb') {
        newStorageCost.innerText = 0;
    }
    else if (isStorage == '512gb') {
        newStorageCost.innerText = 100;
    }
    else if (isStorage == '1tb') {
        newStorageCost.innerText = 180;
    }
    
    return newStorageCost;
}

// delivery cost function 
function updateDeliveryCost(isDelivery) {
    let deliveryCost = document.getElementById('delivery-cost').innerText;
    let newDeliveryCost = document.getElementById('delivery-cost');

    if (isDelivery == 'free') {
        newDeliveryCost.innerText = 0;
    }
    else if (isDelivery == 'paid') {
        newDeliveryCost.innerText = 20;
    }
    
    return newDeliveryCost;
}

// final cost function 
function updateFinalCost(memory, storage, deliveryCharge, promo) {
    let memoryCost = document.getElementById('memory-cost').innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = document.getElementById('storage-cost').innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = document.getElementById('delivery-cost').innerText;
    const finalDeliveryCost = parseInt(deliveryCost);

    let currentCost = document.getElementById('best-cost').innerText;
    let totalCost = document.getElementById('total-cost');
    totalCost.innerText = parseInt(currentCost) + finalMemoryCost + finalStorageCost + finalDeliveryCost;

    let finalCost = document.getElementById('final-cost');
    finalCost.innerText = totalCost.innerText;

    promo = document.getElementById('promo-code').value;
    if (promo == 'stevekaku') {
        const discountAmount = parseFloat(totalCost.innerText) * .2;
        const discountedCost = totalCost.innerText - parseFloat(discountAmount);
        finalCost.innerText = discountedCost;
    }
}

// update memory cost 
document.getElementById('8gb-memory').addEventListener('click', function () {
    updateMemoryCost('8gb');
    updateFinalCost('8gb');
})
document.getElementById('16gb-memory').addEventListener('click', function () {
    updateMemoryCost('16gb');
    updateFinalCost('16gb');
})

// update storage cost 
document.getElementById('256gb-ssd').addEventListener('click', function () {
    updateStorageCost('256gb');
    updateFinalCost('256gb');
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    updateStorageCost('512gb');
    updateFinalCost('512gb');
})
document.getElementById('1tb-ssd').addEventListener('click', function () {
    updateStorageCost('1tb');
    updateFinalCost('1tb');
})

// update delivery cost 
document.getElementById('free-delivery').addEventListener('click', function () {
    updateDeliveryCost('free');
    updateFinalCost('free');
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateDeliveryCost('paid');
    updateFinalCost('paid');
})

// update final cost 
document.getElementById('promo-btn').addEventListener('click', function () {
    updateFinalCost('stevekaku');
    document.getElementById('promo-code').value = '';
})