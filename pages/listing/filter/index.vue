<template>
    <div>
        <nav class="navbar navbar-light navbar-expand sticky-top topNavbar">
            <div class="container-fluid">
                <div class="w-100">
                    <div class="d-flex flex-row row">
                        <div class="text-left d-flex flex-fill justify-content-start align-items-center justify-content-sm-start align-items-sm-center col-12"><img src="assets/img/close-24px.svg" width="28" height="28" style="font-color: #212365;">
                            <h5 class="mb-0 pl-3" style="font-family: Roboto, sans-serif;">Filter</h5>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container" style="margin :24px 0px;padding:0px 16px;">
            <h1 style="font-size: 24px;font-family: Roboto, sans-serif;">Lokasi</h1>
            <div class="text-center d-flex justify-content-center align-items-center" style="padding:4px 16px; height:48px;"><input type="text" style="width:95%;height:32px;border-radius:4px;" placeholder="Masukkan nama lokasi"></div>
        </div>
        <div class="container" style="margin:16px 0px 24px 0px; padding:0 16px;">
            <h1 style="font-size: 24px;font-family: Roboto, sans-serif;">Jenis Properti</h1>
            <div style="padding: 8px 16px;"><button class="btn btn-primary disabled" type="button" style="margin-right:8px;margin-top:8px;" disabled="">Semua</button><button class="btn btn-primary active" type="button" style="margin-right:8px;margin-top:4px;">Rumah</button><button class="btn btn-primary active" type="button" style="margin-right:8px;margin-top:8px;">Apartemen</button><button class="btn btn-primary disabled" type="button" style="margin-right:8px;margin-top:8px;" disabled="">Ruko</button><button class="btn btn-primary disabled" type="button" style="margin-right:8px;margin-top:8px;" disabled="">Gudang</button><button class="btn btn-primary disabled" type="button" style="margin-right:8px;margin-top:8px;" disabled="">Tanah</button></div>
        </div>
        <div class="container" style="margin:16px 0px 24px 0px; padding:0px 16px;">
            <h1 style="font-size: 24px;font-family: Roboto, sans-serif;">Harga</h1>
            <div class="row no-gutters row-cols-2 text-center d-flex justify-content-center align-items-center">
                <div class="col d-flex justify-content-center align-items-center col-5" style="margin:16px 8px 16px 16px;;"><input type="number" style="width:100%; height:32px; border-radius:4px;" placeholder="minimum"></div>
                <div class="col col-5" style="margin:16px 16px 16px 8px;;"><input type="number" style="width:100%;height:32px;border-radius:4px;" placeholder="maksimum"></div>
            </div>
        </div>
        <div class="container" style="margin:16px 0px 24px 0px; padding: 0px 16px;">
            <h1 style="font-size: 24px;font-family: Roboto, sans-serif;">Luas Bangunan</h1>
            <div class="row no-gutters row-cols-2 text-center d-flex justify-content-center align-items-center">
                <div class="col d-flex justify-content-center align-items-center col-5" style="margin:16px 8px 16px 16px;;"><input type="number" style="width:100%; height:32px; border-radius:4px;" placeholder="minimum"></div>
                <div class="col col-5" style="margin:16px 16px 16px 8px;;"><input type="number" style="width:100%;height:32px; border-radius:4px;" placeholder="maksimum"></div>
            </div>
        </div>
        <div class="container" style="margin:16px 0px 24px 0px; padding: 0px 16px;">
            <h1 style="font-size: 24px;font-family: Roboto, sans-serif;">Jumlah Kamar Tidur</h1>
            <div style="padding:8px 16px;">
                <div class="btn-group" role="group"><button class="btn btn-primary disabled" type="button" style="margin-right:16px; border-radius: 8px;" disabled="">1</button><button class="btn btn-primary active" type="button" style="margin-right:16px; border-radius: 8px;">2</button><button class="btn btn-primary disabled" type="button" style="margin-right:16px; border-radius: 8px;" disabled="">3</button><button class="btn btn-primary disabled" type="button" style="margin-right:16px; border-radius: 8px;" disabled="">4</button><button class="btn btn-primary disabled" type="button" style="margin-right:8px; border-radius: 8px;" disabled="">5+</button></div>
            </div>
        </div>
        <div class="container" style="margin:16px 0px 96px 0px; padding: 0px 16px;">
            <h1 style="font-size: 24px;font-family: Roboto, sans-serif;">Jumlah Kamar Mandi</h1>
            <div style="padding:8px 16px;">
                <div class="btn-group" role="group"><button class="btn btn-primary disabled" type="button" style="margin-right:16px; border-radius: 8px;" disabled="">1</button><button class="btn btn-primary disabled" type="button" style="margin-right:16px; border-radius: 8px;" disabled="">2</button><button class="btn btn-primary" type="button" style="margin-right:16px; border-radius: 8px;">3</button><button class="btn btn-primary disabled" type="button" style="margin-right:16px; border-radius: 8px;" disabled="">4</button><button class="btn btn-primary disabled" type="button" style="margin-right:8px; border-radius: 8px;" disabled="">5+</button></div>
            </div>
        </div>
    </div>
</template>
