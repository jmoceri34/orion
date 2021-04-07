import { NgModule } from "@angular/core";
import { PublicComponent } from "./public.component";
import { PublicRoutingModule } from "./public-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PublicLayoutModule } from "./public-layout.module";

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        PublicRoutingModule,
        CommonModule,
        FormsModule,
        PublicLayoutModule
    ]
})

export class PublicModule { }
