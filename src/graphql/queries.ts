import { gql } from '@apollo/client/core';

export const GET_MY_BALANCE = gql`
  query GetMyBalance {
    myBalance
  }
`;

export const GET_MY_TRANSACTIONS = gql`
  query GetMyTransactions {
    myTransactions
      id
      spender {
        id
        username
      }
      recipient {
        id
        username
      }
      amount
      timestamp
    }
  }
`;

export const GET_PENDING_OFFERS = gql`
  query GetPendingOffers {
    myPendingOffers {
      id

      spender {
        id
        username
      }
      recipient {
        id
        username
      }
      amount

      state
    }
  }
`;

export const CREATE_OFFER = gql`
  mutation CreateOffer($recipientId: ID!, $amount: Float!) {
    createOffer(recipientId: $recipientId, amount: $amount)
  }
`;

export const ACCEPT_OFFER = gql`
  mutation AcceptOffer($offerId: ID!) {
    acceptOffer(offerId: $offerId)
  }
`;

export const CANCEL_OFFER = gql`
  mutation CancelOffer($offerId: ID!) {
    cancelOffer(offerId: $offerId)
  }
`;