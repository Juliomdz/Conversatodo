import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private afStore:AngularFirestore) { }

  TraerChats()
  {
    const col = this.afStore.collection("Mensajes", (ref:any) => ref.orderBy('fecha', 'asc'));
    return col.valueChanges();
  }

  TraerChats2()
  {
    const col = this.afStore.collection("Mensajes2", (ref:any) => ref.orderBy('fecha', 'asc'));
    return col.valueChanges();
  }

  GuardarChat(texto:any)
  {
    this.afStore.collection<any>('Mensajes').add(texto);
  }
}
