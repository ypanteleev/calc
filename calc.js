$(window).load(function(){	
	calculateFee = function() {
		var resValue = 0;
		var res = $("#result");
	
		var sumValue = parseFloat($("#sum").val().replace(",","."));
		var countryValue = $(".country").find(":selected").attr("value");
		var bankValue = $(".bank").find(":selected").attr("value");

		var baseFee = $("#base-fee");
		var baseFeeValue = 0;
		
		var minFee = $("#min-fee");
		var minFeeValue = 0;
		
		var minAmount = $("#min-amount");
		var minAmountValue = 0;
		
		var minPay = $("#min-pay");
		var minPayValue = 0;
		
		var totalFee = $("#total-fee");
		var totalFeeValue = 0;
		
		if (countryValue == 1) {
			if (bankValue == 1) {
				baseFeeValue = 2.75;
				minFeeValue = 0.6;
				minAmountValue = 3.5;
			}
			if (bankValue == 2) {
				baseFeeValue = 2.75;
				minFeeValue = 0.6;
				minAmountValue = 10;
			}				
			minPayValue = 30;
		}
		if (countryValue == 2) {
			baseFeeValue = 2.75;
		}
		if (countryValue == 3) {
			baseFeeValue = 2.75;
		}
		
		baseFee.text(baseFeeValue +"%");
		minFee.text(minFeeValue + "%");
		minAmount.text(minAmountValue + " руб.");
		minPay.text(minPayValue + " руб.");
		
		if (minFeeValue) {
			var awaitFee = sumValue * baseFeeValue/100;
			var limitFee = sumValue * minFeeValue/100 + minAmountValue;
			if (awaitFee < limitFee) {
				resValue = sumValue - limitFee;
				totalFeeValue = limitFee;
			} else {
				resValue = sumValue - awaitFee;
				totalFeeValue = awaitFee;
			}
		} else {
			totalFeeValue = sumValue * baseFeeValue/100;
			resValue = sumValue - totalFeeValue;
		}
		
		totalFee.val(totalFeeValue.toFixed(2));
		res.val(resValue.toFixed(2));
	};

	$(document).ready(function() {
		var country = $(".country").val();
		if (country == 1) {
			$(".ru").show();
		} else {
			$(".ru").hide();
		}
		calculateFee();
	});

	$(".country").change(function() {
		var country = $(this).val();
		if (country == 1) {
			$(".ru").show();
		} else {
			$(".ru").hide();
		}
		calculateFee();
	});

	$("#sum").change(function() {
		calculateFee();
	});

	$(".bank").change(function() {
		calculateFee();
	});
});
